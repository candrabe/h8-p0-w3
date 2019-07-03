/*
* Logic Challenge - Pasangan Angka Terbesar
* Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka.
* Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut.
* Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.
*/

function pasanganTerbesar(num) {
    let pasanganTerbesar = 0;
    let pasanganSaatIni = 0;
    num = num.toString();
    let panjang = num.length;

    for (let i = 0; i < panjang; i++) {
        if(i !== panjang) {
            pasanganSaatIni = Number(num[i]+num[i+1]);

            if (pasanganSaatIni > pasanganTerbesar){
                pasanganTerbesar = pasanganSaatIni;
            }
        }
    }

    return pasanganTerbesar;
}

// pasanganTerbesar(12783456);

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99