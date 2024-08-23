import { LucideIcon } from "lucide-react";
import React, { ComponentProps } from "react";

interface TextEditorButtonProps extends ComponentProps<"button"> {
  icon: LucideIcon;
}

export function TextEditorButton({
  icon: Icon,
  ...props
}: TextEditorButtonProps) {
  return (
    <button
      type="button"
      className="rounded-md p-2 hover:bg-zinc-50"
      {...props}
    >
      {Icon && <Icon size={16} className="text-zinc-500" strokeWidth={3} />}
    </button>
  );
}
