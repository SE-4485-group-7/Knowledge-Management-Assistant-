/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import MessageList from "@/components/MessageList";

interface ChatMessagesProps {
  messages: any[]; // Replace 'any' with the appropriate type if known
  loading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export default function ChatMessages({ messages, loading, messagesEndRef }: ChatMessagesProps) {
  return (
    <>
      {messages.length > 0 ? (
        <MessageList messages={messages} loading={loading} messagesEndRef={messagesEndRef} />
      ) : (
        <motion.div className="h-[350px] px-4 w-full md:w-[relative] md:px-0 pt-20">
          <div className="border rounded-lg p-6 flex flex-col gap-4 text-white text-sm dark:text-white dark:border-zinc-700">
            <p className="text-lg"> Hi there, what can I do for you today? </p>
          </div>
        </motion.div>
      )}
    </>
  );
}
