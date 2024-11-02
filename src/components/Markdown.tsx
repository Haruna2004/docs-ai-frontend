import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import './MarkdownStyles.css';

export default function Markdown({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 style={{ color: "blue" }} {...props} />,
        code: ({ node, className, children, ...props }) => (
          <code
            className={className}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "4px",
              borderRadius: "5px",
            }}
            {...props}
          >
            {children}
          </code>
        ),
        ul: ({ children }) => (
          <ul style={{ paddingLeft: "1.5rem", listStyle: "disc" }}>
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li style={{ marginBottom: "0.5rem" }}>{children}</li>
        ),
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
}
