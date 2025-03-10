import { FaRobot } from "react-icons/fa";
import Message from "@/components/Message";

interface MessageListProps {
  messages: { id: string; role: string; content: string }[];
  loading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const MessageList = ({ messages, loading, messagesEndRef }: MessageListProps) => (
  <div className="flex flex-col gap-2 h-full w-dvw items-center overflow-y-scroll" aria-live="polite">
    {messages.map((message, index) => (
      <Message key={message.id} message={message} index={index} />
    ))}

    {loading && messages[messages.length - 1].role !== "assistant" && (
      <div className="flex flex-row gap-2 px-4 w-full md:w-[768px] md:px-0">
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
);

export default MessageList;
