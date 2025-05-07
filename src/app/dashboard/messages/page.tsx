"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PaperclipIcon, Smile, Send } from "lucide-react"

export default function MessagesPage() {
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock data for the mentor
  const mentor = {
    name: "John",
    avatar: "SM",
    role: "Senior Developer",
    status: "online",
  }

  // Mock messages between trainee and mentor
  const messages = [
   
  ]

  // Scroll to bottom of messages on load and when new messages are added
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, you would send the message to the server here
      // For now, we'll just clear the input
      setMessage("")
      // Scroll to bottom after sending
      setTimeout(scrollToBottom, 100)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
          </div>
        </header>

        <div className="flex-1 flex flex-col">
          {/* Mentor Header */}
          <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${mentor.avatar}`} />
              <AvatarFallback>{mentor.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{mentor.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{mentor.role}</span>
                {mentor.status === "online" && <span className="text-xs text-green-500">● Online</span>}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            <div className="text-center">
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">Today</span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-3 max-w-[80%] ${
                  msg.sender === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                {msg.sender === "mentor" && (
                  <Avatar className="h-8 w-8 flex-shrink-0 mt-1">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${mentor.avatar}`} />
                    <AvatarFallback>{mentor.avatar}</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div
                    className={`p-3 rounded-2xl ${
                      msg.sender === "user" ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-900"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <form onSubmit={handleSendMessage} className="flex items-end gap-2">
              <div className="flex-1">
                <Textarea
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[80px] bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500 resize-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Button type="button" variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
                  <PaperclipIcon className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-gray-500 hover:text-gray-900">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button
                  type="submit"
                  size="icon"
                  disabled={!message.trim()}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
