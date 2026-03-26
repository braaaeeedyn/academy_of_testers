import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { aiChatPlugin } from './plugins/aiChatPlugin'
import { contactPlugin } from './plugins/contactPlugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      aiChatPlugin(env.OPENAI_API_KEY),
      contactPlugin(env.SMTP_USER, env.SMTP_PASS),
    ],
    server: {
      port: 5173,
      host: true,
    },
  }
})
