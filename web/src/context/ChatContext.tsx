import { createContext, useContext, type ReactNode } from 'react'

interface ChatContextType {
  openChat: () => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({ openChat, children }: { openChat: () => void; children: ReactNode }) {
  return <ChatContext.Provider value={{ openChat }}>{children}</ChatContext.Provider>
}

export function useChat(): ChatContextType {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error('useChat must be used within a ChatProvider')
  return ctx
}
