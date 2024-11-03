import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import clsx from "clsx";

export default function Markdown({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 className="" {...props} />,
        // code styling
        code: ({ node, className, children, ...props }) => (
          <code
            className={clsx(className, "bg-[#f0f0f0] p-[4px] rounded-[5px]")}
            {...props}
          >
            {children}
          </code>
        ),
        ul: ({ children }) => (
          <ul className="pl-[1.5rem] list-disc">{children}</ul>
        ),
        li: ({ children }) => <li className="mb-[0.5rem]">{children}</li>,
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
}
