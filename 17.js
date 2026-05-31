let hargaBarang = parseInt(prompt("Masukkan total harga barang:"));
let diskon = 0;

if (hargaBarang >= 200000) {
    diskon = hargaBarang * 0.075;
} else {
    diskon = 0;
}

let totalBayar = hargaBarang - diskon;

console.log(`Harga asli  : Rp ${hargaBarang}`);
console.log(`Diskon (7.5%): Rp ${diskon}`);
console.log(`Total bayar : Rp ${totalBayar}`);