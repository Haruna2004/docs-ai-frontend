import { useInput, useResData } from "@/libs/store";
import { clsx } from "clsx";
import { MessageCircle } from "lucide-react";

export function ExampleQuestions() {
  const { success, processing } = useResData();
  const { setInputValue } = useInput();
  return (
    <div className={clsx("space-y-3", (success || processing) && "hidden")}>
      <p className="text-xs font-semibold font-sans text-black/70">
        Example questions
      </p>

      <div className="flex flex-col gap-2">
        {[
          "How to setup payment in react?",
          "Apple pay integration for recurring billing",
        ].map((text) => (
          <div
            key={text}
            className="cursor-pointer flex items-center gap-2 text-sky-700"
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
