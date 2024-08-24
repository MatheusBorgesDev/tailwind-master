"use client";

import { User } from "lucide-react";
import { useMemo } from "react";

import { useFileInputContext } from "./root";

export function ImagePreview() {
  const { files } = useFileInputContext();

  const previewUrl = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (!previewUrl) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    );
  } else {
    return (
      <img
        src={previewUrl}
        alt="Preview"
        className="h-16 w-16 rounded-full object-cover"
      />
    );
  }
}
