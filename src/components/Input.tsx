import { getAiResponse } from "@/libs/queries";
import { useInput, useResData } from "@/libs/store";
import { CornerDownLeft } from "lucide-react";
import React from "react";

function Input() {
  const { setInputValue, inputValue } = useInput();
  const { setResData, setSuccess, setProgress, processing } = useResData();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "" || processing) return;
    setProgress(true);
    const tempInput = inputValue;
    const { success, resData } = await getAiResponse(inputValue);
    setInputValue("");
    setProgress(false);

    if (!success) {
      setInputValue(tempInput);
      return;
    }

    setSuccess(success);
    setResData({
      content: resData.content,
      question: inputValue,
      sources: resData.sources,
      tokenUsed: resData.total_tokens,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full justify-between items-center sticky top-0 font-sans"
    >
      <input
        placeholder="Ask me a question"
        className="w-full outline-none py-3  text-base flex-1"
        autoFocus={true}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="bg-transparent" type="submit">
        <CornerDownLeft className="text-black/70" />
      </button>
    </form>
  );
}

export default Input;
