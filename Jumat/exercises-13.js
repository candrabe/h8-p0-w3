/*
* Logic Challenge - Target Terdekat
* Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
* Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
* Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
* Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function targetTerdekat(arr) {
    let panjang = arr.length;
    let jarakTerdekat = 0;
    let arrO = [];
    let arrX = [];

    for (let i = 0; i < panjang; i++) {
        if(arr[i] === 'o'){
            arrO.push(i);
        } else if (arr[i] === 'x') {
            arrX.push(i);
        }
    }
    
    for (let i = 0; i < arrO.length; i++) {
        for (let j = 0; j < arrX.length; j++) {
            if (jarakTerdekat === 0) {
                jarakTerdekat = Math.abs(arrO[i] - arrX[j]);
            } else {
                if ( (Math.abs(arrO[i] - arrX[j])) < jarakTerdekat ) {
                    jarakTerdekat = Math.abs(arrO[i] - arrX[j]);
                }
            }
        }
    }

    return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2