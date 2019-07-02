/*
* Logic Challenge - Mengelompokkan Angka
* Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka.
* Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:
*       - Kelompok pertama (baris pertama) merupakan angka-angka genap
*       - kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
*       - kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
* Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/

function mengelompokkanAngka(arr) {
    let panjang = arr.length;
    let arr_genap = [];
    let arr_ganjil = [];
    let arr_kelipatan = [];

    for (let i = 0; i < panjang; i++) {
        if (arr[i] % 3 == 0) {
            // Kelipatan 3
            arr_kelipatan.push(arr[i]);
        } else {
            if (arr[i] % 2 == 0) {
                // Genap
                arr_genap.push(arr[i]);
            } else {
                // Ganjil
                arr_ganjil.push(arr[i]);
            }
        }
    }

    return [arr_genap, arr_ganjil, arr_kelipatan];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]