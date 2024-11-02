import { useInput, useResData } from "@/libs/store";
import { clsx } from "clsx";

export function ExampleQuestions() {
  const { success } = useResData();
  const { inputValue } = useInput();
  return (
    <div className={clsx("space-y-3", success && "hidden")}>
      <p className="uppercase text-xs font-semibold text-black/50">
        Example Questions
      </p>
      <div className="flex w-full justify-center gap-5 flex-wrap">
        {[0, 1].map((index) => (
          <p
            className="border rounded-sm px-3 py-1 border-blue-600 cursor-pointer flex-1 text-center"
            key={index}
          >
            How do I install the IOS SDK
          </p>
        ))}
      </div>
    </div>
  );
}
