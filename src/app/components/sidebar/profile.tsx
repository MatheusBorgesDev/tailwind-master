import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-4">
      <img
        src="https://github.com/MatheusBorgesDev.png"
        alt="Matheus Borges"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Matheus Borges
        </span>
        <span className="truncate text-sm text-zinc-500">
          matheusb.dev@gmail.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut size={20} className="text-zinc-500" />
      </button>
    </div>
  );
}
