/** Splits text into whitespace-preserving word tokens for staggered reveal. */
export function splitIntoWords(text: string): string[] {
  return text.split(/(\s+)/).filter(Boolean);
}

/** Splits text into individual characters (grapheme-aware via Array.from). */
export function splitIntoChars(text: string): string[] {
  return Array.from(text);
}
