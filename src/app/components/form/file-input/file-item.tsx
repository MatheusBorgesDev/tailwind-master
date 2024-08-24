import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

import { formatBites } from "@/utils/format-bites";

import { Button } from "../../button";

const fileItemState = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500",
    deleteButton: "",
  },

  variants: {
    state: {
      progress: {
        container: "dark:border-zinc-700",
      },
      completed: {
        container:
          "border-violet-500 text-violet-600 dark:border-violet-300/50",
      },
      error: {
        container:
          "bg-error-25 border-error-300 text-error-700 dark:bg-error-500/5 dark:border-error-500/30 ",
        icon: "border-error-50 bg-error-100 text-error-60 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400",
        deleteButton:
          "text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300",
      },
    },
  },

  defaultVariants: {
    state: "progress",
  },
});

interface FileItemProps extends VariantProps<typeof fileItemState> {
  name: string;
  size: number;
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItemState({ state });

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud size={16} />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 dark:text-error-400 text-sm font-medium">
              Upload failed, please try again.
            </span>
            <span className="text-error-600 dark:text-error-500 text-xs">
              {name}
            </span>
          </div>

          <button>
            <span className="dark:text-error-400 dark:hover:text-error-300 text-sm font-medium text-violet-600 hover:text-violet-800">
              Retry upload
            </span>
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {formatBites(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-full rounded-full bg-violet-600 dark:bg-violet-400"
                style={{ width: state === "completed" ? "100%" : "80%" }}
              />
            </div>

            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === "completed" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "completed" ? (
        <CheckCircle2 size={20} className="fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 size={20} />
        </Button>
      )}
    </div>
  );
}
