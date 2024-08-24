import { ComponentProps } from "react";

interface LabelProps extends ComponentProps<"label"> {
  htmlFor: string;
  lgScreenSrOnly?: boolean;
}

export function Label({
  htmlFor,
  children,
  lgScreenSrOnly,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-zinc-700 ${lgScreenSrOnly ? "lg:sr-only" : ""}`}
      {...props}
    >
      {children}
    </label>
  );
}
