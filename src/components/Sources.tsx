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
      <p className="text-base">Summarized from these pages</p>
      <div className="flex flex-wrap gap-3">
        {sourceState.map(({ source_link }, index) => (
          <Link
            href={source_link}
            target="_blank"
            key={source_link}
            className="flex border border-blue-600 rounded-2xl p-1 px-4 gap-2 items-center"
          >
            <p className=" text-xs">{index + 1}</p>
            <p>{getTitle(source_link)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
