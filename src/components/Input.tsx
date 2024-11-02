import { getAiResponse } from "@/libs/queries";
import { useInput, useResData } from "@/libs/store";
import React from "react";

function Input() {
  const { setInputValue, inputValue } = useInput();
  const { setResData, setSuccess, setProgress, processing } = useResData();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "" || processing) return;
    setProgress(true);
    setInputValue("");
    const tempInput = inputValue;
    const { success, resData } = await getAiResponse(inputValue);
    setProgress(false);

    if (!success) {
      setInputValue(tempInput);
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
      className="flex w-full justify-between items-center sticky top-0"
    >
      <input
        placeholder="Ask me a question"
        className="w-full outline-none py-3  text-base flex-1"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="hidden" type="submit"></button>
    </form>
  );
}

export default Input;
