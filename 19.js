let x = parseInt(prompt("Masukkan angka pertama (x):"));
let y = parseInt(prompt("Masukkan angka kedua (y):"));
let z = parseInt(prompt("Masukkan angka ketiga (z):"));

let terbesar = Math.max(x, y, z);
let terkecil = Math.min(x, y, z);

console.log(`Angka terbesar: ${terbesar}`);
console.log(`Angka terkecil: ${terkecil}`);