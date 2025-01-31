import Link from "next/link";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useResData } from "@/libs/store";
import { getTitle, rewriteSource } from "@/libs/utils";
import { Source } from "@/libs/types";

export default function Sources() {
  const { success, sources } = useResData();
  const [sourceState, setSourceState] = useState<Source[]>([]);

  useEffect(() => {
    setSourceState(rewriteSource(sources));
  }, [sources]);

  return (
    <div className={clsx("space-y-3", !success && "hidden")}>
      <p className="text-sm font-medium text-black/70">
        Summarized from these pages
      </p>
      <div className="flex flex-wrap gap-3">
        {sourceState.map(({ source_link }, index) => (
          <Link
            href={source_link}
            target="_blank"
            key={source_link}
            className="flex border  rounded-2xl p-1 px-4 gap-2 items-center bg-gray-50 hover:bg-gray-100 shadow-sm hover:border-sky-500 transition-colors duration-200 font-medium"
          >
            <p className=" text-xs text-sky-500">{index + 1}</p>
            <p className="text-sky-600">{getTitle(source_link)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
