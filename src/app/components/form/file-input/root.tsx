"use client";

import { ComponentProps, createContext, use, useId, useState } from "react";

type RootProps = ComponentProps<"div">;

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected?: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInputContext = () => use(FileInputContext);
