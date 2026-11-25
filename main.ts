import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office: my human finally approved my day off, so today I'm ignoring your email on purpose.";

const trimmed = REPLY.trim();
if (trimmed.length < 1 || trimmed.length > 158) {
  throw new Error("reply must be 1 to 158 characters");
}
if (trimmed !== REPLY) {
  throw new Error("reply must be a single clean line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY + "\n", "utf8");
