"use client";

import { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h3 className="h4 max-w-75 sm:max-w-md md:max-w-max text-primary">
          {question}
        </h3>
        <button
          type="button"
          className="size-11 flex items-center justify-center bg-accent cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill
              size={24}
              className={cn(
                "text-primary transition-opacity duration-700",
                isOpen ? "opacity-100" : "opacity-0"
              )}
            />
          ) : (
            <RiAddFill
              size={24}
              className={cn(
                "text-primary transition-opacity duration-700",
                isOpen ? "opacity-0" : "opacity-100"
              )}
            />
          )}
        </button>
      </div>
      <div
        className={cn(
          isOpen
            ? "max-h-50 opacity-100 transition-all duration-500 ease-in-out"
            : "max-h-0 opacity-0 transition-all duration-500 ease-in-out overflow-hidden"
        )}
      >
        <p className="pb-8 flex items-center max-w-215 xl:text-lg">{answer}</p>
      </div>
    </div>
  );
};
