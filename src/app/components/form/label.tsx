import { ComponentProps } from "react";

interface LabelProps extends ComponentProps<"label"> {
  htmlFor: string;
}

export function Label({
  htmlFor,

  children,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-zinc-700"
      {...props}
    >
      {children}
    </label>
  );
}
