import { useResData } from "@/libs/store";
import { Clipboard, RefreshCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";
import { clsx } from "clsx";

export default function ActionButtons() {
  const { success } = useResData();
  const { resetResData } = useResData();
  return (
    <div className={clsx("flex justify-between my-2", !success && "hidden")}>
      {/* actions */}
      <div className="flex gap-3">
        <ActionButton
          iconName="refresh"
          text="Clear"
          action={() => resetResData()}
          keepText
        />
        <ActionButton iconName="copy" text="Copy" keepText />
      </div>
      {/* feedback */}
      <div className="flex gap-3">
        <ActionButton iconName="like" text="Good Answer" />
        <ActionButton iconName="dislike" text="Bad Answer" />
      </div>
    </div>
  );
}

export function ActionButton({
  text,
  iconName,
  action,
  keepText,
}: {
  text: string;
  iconName: string;
  keepText?: boolean;
  action?: () => void;
}) {
  return (
    <div
      className="bg-gray-100 flex gap-1 py-0.5 px-2 items-center rounded-sm text-xs cursor-pointer"
      onClick={action}
    >
      <GetIcon name={iconName} />
      <p className={clsx("flex sm:flex", !keepText && "hidden")}>{text}</p>
    </div>
  );
}

function GetIcon({ name }: { name: string }) {
  if (name === "refresh") return <RefreshCcw className="sm:w-3 w-4" />;
  if (name === "dislike") return <ThumbsDown className="sm:w-3 w-4" />;
  if (name === "like") return <ThumbsUp className="sm:w-3 w-4" />;
  if (name === "copy") return <Clipboard className="sm:w-3 w-4" />;
}
