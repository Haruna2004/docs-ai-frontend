export type InputType = {
  inputValue: string;
  setInputValue: (value: string) => void;
};

type ResData = {
  content: string;
  question: string;
  sources: {
    source_link: string;
    relevance: number;
  }[];
  tokenUsed: number;
};

export type ResDataType = ResData & {
  success: boolean;
  processing: boolean;
  setSuccess: (value: boolean) => void;
  setProgress: (value: boolean) => void;
  setResData: ({ content, question, sources, tokenUsed }: ResData) => void;
  getResData: () => ResData;
  resetResData: () => void;
};
