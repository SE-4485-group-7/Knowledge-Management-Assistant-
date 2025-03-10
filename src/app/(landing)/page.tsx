"use client";

import { FaUserAlt } from "react-icons/fa";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import MessageList from "@/components/MessageList";

export default function Home() {
  const { messages, input, handleSubmit, handleInputChange } =
    useChat({
      onError: () =>
        toast.error("You have to feed me before I can help you!"),
    });

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-row justify-center pb-20 h-dvh bg-zinc-900">
      <div className="flex flex-col justify-between gap-4">
        {messages.length > 0 ? (
          <MessageList messages={messages} loading={loading} messagesEndRef={messagesEndRef} />
        ) : (
          <motion.div className="h-[350px] px-4 w-full md:w-[relative] md:px-0 pt-20">
            <div className="border rounded-lg p-6 flex flex-col gap-4 text-white text-sm dark:text-white dark:border-zinc-700">
              <p> Hi there, what can I do for you today? </p>
            </div>
          </motion.div>
        )}

        <form
          className="flex flex-col gap-2 relative items-center"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="flex items-center w-full md:max-w-[768px] max-w-[calc(100dvw-32px)] bg-zinc-700 rounded-full px-4 py-2">
            <span className="text-zinc-300 focus:outline-none mr-3 w-5 h-5">
              <FaUserAlt aria-hidden="true" />
            </span>
            <input
              ref={inputRef}
              className="bg-transparent flex-grow outline-none text-zinc-300 placeholder-zinc-400"
              placeholder="Ask me anything..."
              value={input}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}