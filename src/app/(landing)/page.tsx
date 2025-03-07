"use client";

import { FaRobot, FaUserAlt } from "react-icons/fa";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Markdown } from "@/components/markdown";

interface MessageProps {
  message: { id: string; role: string; content: string };
  index: number;
}

const Message = ({ message, index }: MessageProps) => (
  <motion.div
    key={message.id}
    className={`flex flex-row gap-2 px-4 w-full md:w-[500px] md:px-0 ${index === 0 ? "pt-20" : ""
      }`}
    initial={{ y: 5, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
  >
    <div className="size-[24px] flex flex-col justify-center items-center flex-shrink-0 text-white">
      {message.role === "assistant" ? <FaRobot /> : <FaUserAlt />}
    </div>
    <div className="flex flex-col gap-1">
      <div className="text-zinc-300 flex flex-col gap-4">
        <Markdown>{message.content}</Markdown>
      </div>
    </div>
  </motion.div>
);

export default function Home() {
  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat({
      onError: () =>
        toast.error("You have to feed me before I can help you!"),
    });

  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 10000); 
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-row justify-center pb-20 h-dvh bg-zinc-900">
      <div className="flex flex-col justify-between gap-4">
        {messages.length > 0 ? (
          <div
            className="flex flex-col gap-2 h-full w-dvw items-center overflow-y-scroll"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <Message key={message.id} message={message} index={index} />
            ))}

            {loading &&
              messages[messages.length - 1].role !== "assistant" && (
                <div className="flex flex-row gap-2 px-4 w-full md:w-[500px] md:px-0">
                  <div className="size-[24px] flex flex-col justify-center items-center flex-shrink-0 text-zinc-400">
                    <FaRobot />
                  </div>
                  <div className="flex flex-col gap-1 text-zinc-400">
                    <div>Thinking...</div>
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>
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
          <div className="flex items-center w-full md:max-w-[500px] max-w-[calc(100dvw-32px)] bg-zinc-700 rounded-full px-4 py-2">
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