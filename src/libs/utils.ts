import { Source } from "./types";

const urlDomain = "https://paystack.com";

export const rewriteSource = (sources: Source[]) => {
  const uniqueLinks = new Set();

  for (let i = 0; i < sources.length; i++) {
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

// https://developer.flutterwave.com/docs/integration-guides/checksum

export const getTitle = (sourceLink: string) => {
  const sourceLinks = sourceLink.split("/");
  const endings1 = sourceLinks[sourceLinks.length - 2].replace(/-/g, " ");
  const endings2 = sourceLinks[sourceLinks.length - 1].replace(/-/g, " ");
  const title = capitalize(endings1) + ": " + capitalize(endings2);
  return title;
};
