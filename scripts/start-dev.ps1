#Requires -Version 5
# ---------------------------------------------------------------------------
# Academy of Testers - local dev launcher (Windows / PowerShell)
#
# Starts the Docker Postgres, waits for it to be healthy, then launches the
# Spring Boot backend and the Vite frontend in their own windows.
#
# The backend is pointed at localhost:5433 on purpose - see RUNNING.md,
# "Why port 5433". Run this from anywhere:  .\scripts\start-dev.ps1
# ---------------------------------------------------------------------------
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "==> Starting Postgres (Docker)..." -ForegroundColor Cyan
docker compose up -d postgres | Out-Null

Write-Host "==> Waiting for Postgres to become healthy..." -ForegroundColor Cyan
$healthy = $false
for ($i = 0; $i -lt 30; $i++) {
    $status = (docker inspect --format '{{.State.Health.Status}}' aot-postgres 2>$null)
    if ($status -eq 'healthy') { $healthy = $true; break }
    Start-Sleep -Seconds 2
}
if (-not $healthy) { throw "Postgres did not become healthy in time. Check: docker logs aot-postgres" }
Write-Host "    Postgres healthy." -ForegroundColor Green

# Load .env (if present) so the backend inherits JWT/mail/OpenAI secrets.
$envFile = Join-Path $root '.env'
if (Test-Path $envFile) {
    Get-Content $envFile | ForEach-Object {
        $line = $_.Trim()
        if ($line -and -not $line.StartsWith('#') -and $line.Contains('=')) {
            $pair = $line.Split('=', 2)
            Set-Item -Path "Env:$($pair[0].Trim())" -Value $pair[1].Trim()
        }
    }
}

# Point the host-run backend at the Docker Postgres on the collision-free port.
$env:SPRING_DATASOURCE_URL      = 'jdbc:postgresql://localhost:5433/aot_db'
$env:SPRING_DATASOURCE_USERNAME = 'aot_user'
$env:SPRING_DATASOURCE_PASSWORD = 'aot_password'
if (-not $env:JWT_SECRET) {
    $env:JWT_SECRET = 'default-dev-secret-that-is-at-least-32-bytes-long-for-hmac'
}

Write-Host "==> Launching backend (Spring Boot) -> http://localhost:8080 ..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "Set-Location '$root\server'; mvn spring-boot:run"

Write-Host "==> Launching frontend (Vite) -> http://localhost:5173 ..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList '-NoExit', '-Command', "Set-Location '$root\web'; npm run dev"

Write-Host ""
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Green
Write-Host "Backend:  http://localhost:8080/api/health" -ForegroundColor Green
Write-Host "(Two new PowerShell windows were opened - close them to stop the servers.)"
