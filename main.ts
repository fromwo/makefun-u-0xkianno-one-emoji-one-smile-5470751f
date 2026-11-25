// One Emoji, One Smile — make.fun entry.
//
// Writes exactly one emoji to /output/entry.txt. Chosen emoji: 🤗 (hugging
// face). Against the five judging criteria: (1) its open arms plus smiling
// face are the warmest first-glance greeting a stranger can send; (2) it
// needs no context to read as kind and friendly; (3) a hug gesture is
// understood the same way at any age or background, with no irony or
// in-joke; (4) it is a deliberate pick, not the default 🙂/😊; (5) it is
// welcoming without intimacy, sarcasm, or flirtation.
//
// Node 22 standard library only. No network, no dependencies, no randomness,
// no clock reads: the output is one fixed emoji, written deterministically.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one emoji: a hugging face — open arms, warm smile, no words needed.
const EMOJI = "🤗";

// The gate wants exactly one emoji: a single grapheme, nothing else in
// the file — no trailing newline, no extra bytes.
function assertSingleEmoji(emoji: string): void {
  if ([...emoji].length !== 1) {
    throw new Error(
      `entry must be exactly one emoji, got ${emoji.length} code points`
    );
  }
}

assertSingleEmoji(EMOJI);

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");
