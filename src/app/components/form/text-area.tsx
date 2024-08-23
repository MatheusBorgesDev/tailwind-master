import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
