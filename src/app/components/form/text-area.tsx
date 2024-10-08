import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-400 dark:focus:placeholder-zinc-300 dark:focus:ring-violet-500/10"
      {...props}
    />
  );
}
