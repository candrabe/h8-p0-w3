/*
* Logic Challenge - Target Terdekat
* Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
* Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
* Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
* Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
    let panjang = arr.length;
    let jarakTerpendek = 0;
    let tmpJarak = 0;
    let start = false;

    for (let i = 0; i < panjang; i++) {
        if ( start ) {
            tmpJarak += 1;
        }

        if (arr[i] === 'o') {
            tmpJarak = 0;
            start = true;
        }

        if ( (start && (arr[i] === 'x')) ) {
            start = false;
            jarakTerpendek = tmpJarak;
            tmpJarak = 0;
        }
    }

    return jarakTerpendek;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2