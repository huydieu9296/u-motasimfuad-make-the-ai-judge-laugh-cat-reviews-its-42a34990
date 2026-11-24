// Cat Reviews Its Human — one-star review, written by the house cat.
// The program writes exactly one line (132 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

const REVIEW =
  "One star. The food arrives late, the human sleeps on MY side of the bed, and he has the nerve to call my 3 a.m. zoomies 'a problem.'";

// The gate requires UTF-8 text of 1–200 characters, non-blank, on one line.
function validateEntry(text: string): string {
  const line = text.replace(/\r\n?/g, "\n").trim();
  if (line.length === 0) {
    throw new Error("entry must not be blank");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`entry is ${line.length} characters, over the ${MAX_CHARS} limit`);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return line;
}

function main(): void {
  const entry = validateEntry(REVIEW);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, entry, "utf8");
}

main();
