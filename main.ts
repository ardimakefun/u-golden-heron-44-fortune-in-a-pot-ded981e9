// SPDX-License-Identifier: MIT
// Fortune in a Pot — writes one original fortune for a houseplant to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Soon the morning sun will visit your windowsill first, and you will grow one brave leaf to make the neighbours jealous.";

// Validate length in code points (not bytes) before writing.
const len = [...FORTUNE].length;
if (len < 1 || len > 200) {
  throw new Error(`Fortune length ${len} code points is outside 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
