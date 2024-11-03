import { Source } from "./types";

const urlDomain = "https://paystack.com";

export const rewriteSource = (sources: Source[]) => {
  const uniqueLinks = new Set();

  for (let i = 0; i < sources.length; i++) {
    // Update `source_link` with necessary replacements
    sources[i].source_link =
      urlDomain +
      sources[i].source_link
        .replace(/\\/g, "/")
        .replace(".mdx", "")
        .replace("data/content/doc", "/docs");

    // Add to `uniqueLinks` if it's not already there
    if (uniqueLinks.has(sources[i].source_link)) {
      sources.splice(i, 1); // Remove the duplicate item
      i--; // Adjust index after removal
    } else {
      uniqueLinks.add(sources[i].source_link);
    }
  }

  return sources;
};

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const getTitle = (sourceLink: string) => {
  const sourceLinks = sourceLink.split("/");
  const endings1 = sourceLinks[sourceLinks.length - 2].replace(/_/g, " ");
  const endings2 = sourceLinks[sourceLinks.length - 1].replace(/_/g, " ");
  const title = capitalize(endings1) + ": " + capitalize(endings2);
  return title;
};
