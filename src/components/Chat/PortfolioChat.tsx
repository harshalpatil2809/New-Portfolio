// components/chat/PortfolioChat.tsx

'use client';

import { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatToggleButton from './ChatToggleButton';

export interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
}

export default function PortfolioChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentQuery = input;

    setInput('');
    setIsLoading(true);

    const aiMessageId = crypto.randomUUID();

    const initialAiMessage: Message = {
      id: aiMessageId,
      role: 'ai',
      text: '',
    };

    try {
      const response = await fetch(
        'http://localhost:8000/api/portfolio/chat/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: currentQuery,
          }),
        }
      );

      if (!response.body)
        throw new Error('ReadableStream processing failed');

      setMessages((prev) => [...prev, initialAiMessage]);

      setIsLoading(false);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        const token = decoder.decode(value, {
          stream: true,
        });

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMessageId
              ? {
                  ...msg,
                  text: msg.text + token,
                }
              : msg
          )
        );
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <ChatToggleButton onClick={() => setIsOpen(true)} />
      )}

      {isOpen && (
        <div className="w-[410px] max-w-[calc(100vw-2rem)] h-[650px] overflow-hidden rounded-3xl border border-white/10 bg-[#050505] flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-300">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)] pointer-events-none" />

          <ChatHeader onClose={() => setIsOpen(false)} />

          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            chatEndRef={chatEndRef}
          />

          <ChatInput
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
}