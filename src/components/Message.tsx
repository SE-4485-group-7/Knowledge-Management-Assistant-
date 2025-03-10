import { FaRobot, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Markdown } from "@/components/markdown";

interface MessageProps {
  message: { id: string; role: string; content: string };
  index: number;
}

const Message = ({ message, index }: MessageProps) => (
  <motion.div
    key={message.id}
    className={`flex flex-row gap-2 px-4 w-full md:w-[768px] md:px-0 ${index === 0 ? "pt-20" : ""}`}
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

export default Message;
