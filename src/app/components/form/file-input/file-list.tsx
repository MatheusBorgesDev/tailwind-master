"use client";

import { Trash2, UploadCloud } from "lucide-react";

import { formatBites } from "@/utils/format-bites";

import { useFileInputContext } from "./root";

export function FileList() {
  const { files } = useFileInputContext();

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud size={16} />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-xs text-zinc-500">
                {formatBites(file.size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-violet-600"
                  style={{ width: "80%" }}
                />
              </div>

              <span className="">80%</span>
            </div>
          </div>
          <button
            type="button"
            className="ml-auto rounded-md p-2 hover:bg-zinc-50"
          >
            <Trash2 size={20} className="text-zinc-500" />
          </button>
        </div>
      ))}
    </div>
  );
}
