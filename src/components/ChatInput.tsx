import { FaUserAlt } from "react-icons/fa";
import { ChangeEvent, FormEvent, RefObject } from "react";

interface ChatInputProps {
  inputRef: RefObject<HTMLInputElement | null>;
  input: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ChatInput({ inputRef, input, handleSubmit, handleInputChange }: ChatInputProps) {
  return (
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
  );
}
