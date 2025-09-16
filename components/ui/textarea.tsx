import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border focus:border-accent placeholder:text-secondary aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-none border bg-white px-6 py-4 text-base text-primary transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
