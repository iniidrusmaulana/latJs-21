let hargaMakanan = parseInt(prompt("Masukkan harga makanan:"));

let pajak = hargaMakanan * 0.1;
let fee = hargaMakanan * 0.05;

let hargaBayar = hargaMakanan + pajak + fee;

console.log(`Harga makanan : ${hargaMakanan}`);
console.log(`Pajak : ${pajak}`);
console.log(`Fee : ${fee}`);
console.log(`Harga bayar : ${hargaBayar}`);