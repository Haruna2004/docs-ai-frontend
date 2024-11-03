import { useResData } from "@/libs/store";
import React from "react";
import { clsx } from "clsx";
import Markdown from "./Markdown";

export default function Answer() {
  const { success, question, content } = useResData();

  return (
    <>
      <h3 className={clsx("font-semibold text-xl", !success && "hidden")}>
        {question}
      </h3>
      {/* answer */}
      <div className={clsx("space-y-2 text-base", !success && "hidden")}>
        <Markdown markdownText={content} />
      </div>
    </>
  );
}
