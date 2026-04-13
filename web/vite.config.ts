import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { contactPlugin } from './plugins/contactPlugin'

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
    plugins: [
      react(),
      contactPlugin(env.SMTP_USER, env.SMTP_PASS),
    ],
    server: {
      port: 5173,
      host: true,
      proxy: apiProxy,
    },
    preview: {
      host: true,
      proxy: apiProxy,
    },
  }
})
