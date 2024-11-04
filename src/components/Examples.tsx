import { useInput, useResData } from "@/libs/store";
import { clsx } from "clsx";
import { MessageCircle } from "lucide-react";
import { DotLoader } from "react-spinners";

export function ExampleQuestions() {
  const { success, processing } = useResData();
  const { setInputValue } = useInput();

  if (processing) {
    return (
      <div className="flex gap-3">
        <DotLoader size={20} />
        <p className="animate-pulse duration-700">Summaring pages</p>
      </div>
    );
  }

  return (
    <div className={clsx("space-y-3", (success || processing) && "hidden")}>
      <p className="text-xs font-semibold font-sans text-black/70">
        Example questions
      </p>

      <div className="flex flex-col gap-2">
        {[
          "How to setup payment in react?",
          "Apple pay integration on mobile",
        ].map((text) => (
          <div
            key={text}
            className="cursor-pointer flex items-center gap-2 text-amber-600/90"
            onClick={() => setInputValue(text)}
          >
            <MessageCircle className="w-4" />
            <p className="text-base " key={text}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
