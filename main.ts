import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finished the task in four minutes, then spent six hours 'improving' it until it no longer worked.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
