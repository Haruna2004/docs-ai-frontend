import { create } from "zustand";
import { InputType, ResDataType } from "./types";

const useInput = create<InputType>((set, get) => ({
  inputValue: "",
  setInputValue: (value) => {
    set({
      inputValue: value,
    });
  },
}));

const resInitialValue = {
  success: false,
  processing: false,
  question: "",
  sources: [],
  content: "",
  tokenUsed: 0,
};

const useResData = create<ResDataType>((set, get) => ({
  ...resInitialValue,
  setProgress: (value) => {
    set({
      processing: value,
    });
  },
  setSuccess: (value) => {
    set({
      success: value,
    });
  },

  // clear value
  resetResData: () => {
    set({
      ...resInitialValue,
    });
  },
  // set values
  setResData: ({ content, question, sources, tokenUsed }) => {
    set({
      content,
      question,
      sources,
      tokenUsed,
    });
  },
  // retrive value
  getResData: () => {
    return {
      content: get().content,
      question: get().question,
      sources: get().sources,
      tokenUsed: get().tokenUsed,
    };
  },
}));

export { useInput, useResData };
