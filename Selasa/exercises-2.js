/*
* Mengakses Nilai Dalam Array
* Tahukah kamu jika string adalah sebuah array? Kamu dapat mengakses karakter-karakter pada sebuah string layaknya mengakses nilai pada sebuah array. Untuk membuktikannya, kerjakanlah tantangan ini!
*/

function balikString(kata) {
    var panjang = kata.length;
    var kata_terbalik = '';

    for(var i = panjang-1; i >= 0; i--){
        kata_terbalik += kata[i];
    }

    return kata_terbalik;
}

console.log(balikString("hello world!"));