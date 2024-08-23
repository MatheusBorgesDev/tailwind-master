import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

import { formatBites } from "@/utils/format-bites";

import { Button } from "../../button";

const fileItemState = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600",
    deleteButton: "",
  },

  variants: {
    state: {
      progress: {
        container: "",
      },
      completed: {
        container: "border-violet-500 text-violet-600",
      },
      error: {
        container: "bg-error-25 border-error-300 text-error-700",
        icon: "border-error-50 bg-error-100 text-error-60",
        deleteButton:
          "text-error-700 hover:text-error-900 bg-error-100 hover:bg-error-200",
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
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again.
            </span>
            <span className="text-error-600 text-xs">{name}</span>
          </div>

          <button>
            <span className="text-sm font-medium text-violet-600 hover:text-violet-800">
              Retry upload
            </span>
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-xs text-zinc-500">{formatBites(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-violet-600"
                style={{ width: state === "completed" ? "100%" : "80%" }}
              />
            </div>

            <span className="text-sm font-medium text-zinc-700">
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
