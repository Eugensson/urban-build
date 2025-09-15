import { cn } from "@/lib/utils";

interface PretitleProps {
  text: string;
  centered?: boolean;
}

export const Pretitle = ({ text, centered }: PretitleProps) => {
  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-3",
        centered && "justify-center"
      )}
    >
      <div className="size-2 bg-accent" />
      <p className="font-primary tracking-[3.2px] uppercase">{text}</p>
      <div className="size-2 bg-accent" />
    </div>
  );
};
