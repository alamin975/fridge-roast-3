import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge hums louder than my meetings and still forgets what's inside — at least the meetings pretend to listen.";

// writeEntry writes the single roast line to /output/entry.txt as UTF-8,
// with no trailing newline, so the gate sees exactly one line.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
