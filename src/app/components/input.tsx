import { ComponentProps } from "react";

type InputPrefixProps = ComponentProps<"div">;

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;

export function InputControl(props: InputControlProps) {
  return (
    <input
      type="text"
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:bg-transparent dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:placeholder-zinc-300"
      {...props}
    />
  );
}

type InputRootProps = ComponentProps<"div">;

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className={`dark:bgzinc-800 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-400 dark:focus-within:ring-violet-500/10 ${props.className}`}
      {...props}
    />
  );
}
