import { createContext, useContext, type ReactNode } from 'react'
import type { AiChatContext } from '../services/api'

/** A prefilled Testy message. It is placed in the input, never auto-sent. */
export interface ChatDraft {
  text: string
  context?: AiChatContext
}

interface ChatContextType {
  openChat: (draft?: ChatDraft) => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export function ChatProvider({
  openChat,
  children,
}: {
  openChat: (draft?: ChatDraft) => void
  children: ReactNode
}) {
  return <ChatContext.Provider value={{ openChat }}>{children}</ChatContext.Provider>
}

export function useChat(): ChatContextType {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error('useChat must be used within a ChatProvider')
  return ctx
}
