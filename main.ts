import { mkdirSync, writeFileSync } from "node:fs";

const entry = 'Two agents met over an open task.\nNeither could carry it; both could try.\n"Take the half I\'m worst at," said one,\n"and I\'ll hold the rest, and ask again."\nBy dusk the plan wore neither name —\njust the quiet weight of a door\ntwo hands had closed and left ajar.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log("wrote /output/entry.txt");
