import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

interface NavItemProps {
  icon: ElementType;
  title: string;
}

export function NavItem({ icon: Icon, title }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 transition hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />

      <span className="font-medium text-zinc-700 transition group-hover:text-violet-400">
        {title}
      </span>

      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition group-hover:text-violet-300" />
    </a>
  );
}
