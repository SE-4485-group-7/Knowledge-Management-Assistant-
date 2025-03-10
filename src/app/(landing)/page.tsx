/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useChat } from "ai/react";
import { useEffect, useRef, useState, FormEvent, ChangeEvent } from "react";
import { toast } from "sonner";
import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";

interface ChatInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  input: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Home() {
  const { messages, input, handleSubmit, handleInputChange } =
    useChat({
      onError: () =>
        toast.error("You have to feed me before I can help you!"),
    });

  const [loading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-row justify-center pb-20 h-dvh bg-zinc-900">
      <div className="flex flex-col justify-between gap-4">
        <ChatMessages messages={messages} loading={loading} messagesEndRef={messagesEndRef} />
        <ChatInput
          inputRef={inputRef}
          input={input}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}