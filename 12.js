const prompt = require("prompt-sync")({sigint: true});
let r = Number(prompt("masukkan jari jari :"));
let volume = 4/3 * 3.14 * r^3
let luasP = 4 * 3.14 * r^2

console.log(`volume: ${volume}`);
console.log(`luasP: ${luasP}`);

