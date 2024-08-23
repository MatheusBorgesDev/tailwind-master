import { LogOut } from "lucide-react";

import { Button } from "../button";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-4">
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

      <Button type="button" variant="ghost">
        <LogOut size={20} className="text-zinc-500" />
      </Button>
    </div>
  );
}
