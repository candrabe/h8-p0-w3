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

function groupAnimals(animals) {
    let arr = [];
    let new_arr = [];
    // Sort
    animals = animals.sort();

    let panjang = animals.length;
    let tes = '';

    for (let i = 0; i < panjang; i++) {
        if ( arr[animals[i][0]] === undefined ) {
            arr[animals[i][0]] = [];
            arr[animals[i][0]].push(animals[i]);
        } else {
            arr[animals[i][0]].push(animals[i]);
        }
    }

    for (let key in arr) {
        new_arr.push(arr[key]);
    }

    return new_arr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]