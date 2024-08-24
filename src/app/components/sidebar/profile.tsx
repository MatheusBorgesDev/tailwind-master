import { LogOut } from "lucide-react";
import Image from "next/image";

import { Button } from "../button";

const urlImg = "https://github.com/MatheusBorgesDev.png";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-4">
      <Image
        src={urlImg}
        alt="Matheus Borges"
        width={0}
        height={0}
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
