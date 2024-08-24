"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { FileItem } from "./file-item";
import { useFileInputContext } from "./root";

export function FileList() {
  const { files } = useFileInputContext();

  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease",
  });

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="completed"
          />
        );
      })}
    </div>
  );
}
