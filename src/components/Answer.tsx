import { useResData } from "@/libs/store";
import React from "react";
import { clsx } from "clsx";
import Markdown from "./Markdown";

export default function Answer() {
  const { success, question, content } = useResData();

  return (
    <>
      <h3 className={clsx("font-medium text-xl", !success && "hidden")}>
        {question}
      </h3>
      {/* answer */}
      <div className={clsx("space-y-2", !success && "hidden")}>
        <h3 className="font-medium text-xl">Answer</h3>
        <Markdown markdownText={content} />
      </div>
    </>
  );
}
