import { RiArrowRightUpLine } from "react-icons/ri";

export const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-52.5 min-w-50 h-13.5 px-1.25 pl-2.5 pr-1.25 flex items-center justify-between bg-accent group cursor-pointer">
      <span className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
        {text}
      </span>
      <div className="size-11 flex items-center justify-center bg-primary">
        <RiArrowRightUpLine
          className="text-white group-hover:rotate-45 transition-transform duration-300"
          size={20}
        />
      </div>
    </button>
  );
};
