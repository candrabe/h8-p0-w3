/*
* Logic Challenge - Number Palindrome
* Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka.
* Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
* Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.
* Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome.
* Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
*/

// Ini solusi menggunakan rekursiv
// function angkaPalindrome(num) {
//     let kata = num + 1;
//     kata = kata.toString();
//     let panjang = kata.length;
//     let kataTerbalik = '';
    
//     for(let i = panjang-1; i >= 0; i--){
//         kataTerbalik += kata[i];
//     }

//     if(kata === kataTerbalik){
//         return kata;
//     } else {
//         return angkaPalindrome(Number(kata));
//     }
// }

// Ini solusi tanpa rekursiv
function angkaPalindrome(num) {
    let loop = true;
    let panjang, kata, kataTerbalik;

    while (loop) {
        kata = num;
        kata = kata.toString();
        panjang = kata.length;
        kataTerbalik = '';

        for(let i = panjang-1; i >= 0; i--){
            kataTerbalik += kata[i];
        }

        if(kata === kataTerbalik){
            loop = false;
        } else {
            num++;
        }
    }

    return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001