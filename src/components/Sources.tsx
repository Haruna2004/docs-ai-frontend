import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { useResData } from "@/libs/store";

export default function Sources() {
  const { success } = useResData();
  return (
    <div className={clsx("space-y-3", !success && "hidden")}>
      <p className="text-sm">Summarized from these pages</p>
      <div className="flex flex-wrap gap-3">
        {[0, 1, 2, 3, 4].map((index) => (
          <Link
            href="#"
            key={index}
            className="flex border border-blue-600 rounded-2xl p-1 px-4 gap-2 items-center"
          >
            <p className=" text-xs">{index + 1}</p>
            <p>Terminal app</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
