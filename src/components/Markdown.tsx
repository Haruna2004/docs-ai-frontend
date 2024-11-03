import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import clsx from "clsx";

export default function Markdown({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Headings
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl font-bold my-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-xl font-bold my-3" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-lg font-bold my-2" {...props} />
        ),

        // Paragraphs
        p: ({ node, ...props }) => (
          <p className="my-2 leading-relaxed" {...props} />
        ),

        // Lists
        ul: ({ children }) => (
          <ul className="pl-6 list-disc my-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="pl-6 list-decimal my-2">{children}</ol>
        ),
        li: ({ children }) => <li className="mb-2">{children}</li>,

        // Code blocks
        code: ({ node, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          const language = match ? match[1] : "";

          // // Inline code
          // if (inline) {
          //   return (
          //     <code
          //       className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono text-sm"
          //       {...props}
          //     >
          //       {children}
          //     </code>
          //   );
          // }

          // Inline code (based on node type)
          const isInline =
            node &&
            node.position &&
            node.position.start.line === node.position.end.line;
          if (isInline) {
            return (
              <code
                className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono text-sm"
                {...props}
              >
                {children}
              </code>
            );
          }

          // Special handling for bash/shell commands
          if (language === "bash" || language === "sh") {
            return (
              <div className="my-4">
                <div className="bg-gray-900 rounded-t px-4 py-2 text-gray-200 text-sm">
                  Terminal
                </div>
                <SyntaxHighlighter
                  language={language}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  }}
                  className="rounded-b"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            );
          }

          // Code blocks (jsx, javascript, etc)
          return (
            <div className="my-4">
              {language && (
                <div className="bg-gray-100 border-b border-gray-200 rounded-t px-4 py-2 text-gray-600 text-sm">
                  {language}
                </div>
              )}
              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderTopLeftRadius: language ? 0 : "0.375rem",
                }}
                className={clsx("rounded-b", !language && "rounded-t")}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </div>
          );
        },

        // Links
        a: ({ node, ...props }) => (
          <a
            className="text-blue-600 hover:text-blue-800 underline"
            {...props}
          />
        ),

        // Blockquotes
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-gray-200 pl-4 my-4 italic"
            {...props}
          />
        ),
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
}
