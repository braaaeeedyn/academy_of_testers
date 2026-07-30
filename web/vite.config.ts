import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiProxyTarget = env.VITE_API_PROXY_TARGET || 'http://localhost:8080'
  const apiProxy = {
    '/api': {
      target: apiProxyTarget,
      changeOrigin: true,
    },
    '/resources/AP': {
      target: apiProxyTarget,
      changeOrigin: true,
      configure: (proxy) => {
        proxy.on('proxyRes', (proxyRes) => {
          delete proxyRes.headers['x-frame-options']
        })
      },
    },
    '/resources/sat': {
      target: apiProxyTarget,
      changeOrigin: true,
      configure: (proxy) => {
        proxy.on('proxyRes', (proxyRes) => {
          delete proxyRes.headers['x-frame-options']
        })
      },
    },
  }

  return {
    plugins: [react()],
    server: {
      port: 5173,
      host: true,
      proxy: apiProxy,
      // Docker on Windows/macOS doesn't forward filesystem events across the
      // bind mount, so poll for changes to keep HMR working in the container.
      watch: { usePolling: true, interval: 200 },
    },
    preview: {
      host: true,
      proxy: apiProxy,
    },
  }
})
