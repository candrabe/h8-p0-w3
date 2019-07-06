/*
* Logic Challenge - Mengelompokkan Hewan
* Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.
* Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya.
* Abjad harus berurut dari a-z (jika ada).
* Untuk kasus ini, anggap saja semua text lowercase.
* Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
* maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
* Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/

// Solusi 1: Menggunakan associative array
// function groupAnimals(animals) {
//     let arr = [];
//     let finalArr = [];
//     // Sort
//     animals = animals.sort();

//     let panjang = animals.length;

//     for (let i = 0; i < panjang; i++) {
//         if ( arr[animals[i][0]] === undefined ) {
//             arr[animals[i][0]] = [];
//             arr[animals[i][0]].push(animals[i]);
//         } else {
//             arr[animals[i][0]].push(animals[i]);
//         }
//     }

//     for (let key in arr) {
//         finalArr.push(arr[key]);
//     }

//     return finalArr;
// }

// Solusi 2: Tanpa menggunakan associative array
function groupAnimals(animals) {
    animals = animals.sort();
    let panjang = animals.length;
    let arr = [];
    let finalArr = [];
    let initial = animals[0][0];

    for (let i = 0; i < panjang; i++) {
        if (initial === animals[i][0]) {
            arr.push(animals[i]);

            if (i === (panjang - 1)) {
                finalArr.push(arr);
            }
        } else {
            finalArr.push(arr);
            arr = [];
            arr.push(animals[i]);
            initial = animals[i][0];
        }
    }

    return finalArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]