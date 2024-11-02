import { RefreshCcw } from "lucide-react";
import React from "react";

export default function ActionButtons() {
  return (
    <div className="flex justify-between">
      {/* actions */}
      <div className="flex gap-3">
        <ActionButton iconName="Home" text="Clear" />
        <ActionButton iconName="Home" text="Copy" />
      </div>
      {/* feedback */}
      <div className="flex gap-3">
        <ActionButton iconName="Home" text="Good Answer" />
        <ActionButton iconName="Home" text="Bad Answer" />
      </div>
    </div>
  );
}

export function ActionButton({
  text,
  iconName,
}: {
  text: string;
  iconName: string;
}) {
  return (
    <div className="bg-gray-100 flex gap-1 py-0.5 px-1 items-center rounded-sm text-xs cursor-pointer">
      <RefreshCcw className="w-3" />
      <p>{text}</p>
    </div>
  );
}
