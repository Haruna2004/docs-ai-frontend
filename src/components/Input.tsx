import React from "react";

function Input() {
  return (
    <div className="flex w-full justify-between items-center sticky top-0">
      <input
        placeholder="Ask me a question"
        className="w-full outline-none py-2  text-base flex-1"
      />
    </div>
  );
}

export default Input;
