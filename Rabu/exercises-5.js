/*
* Logic Challenge - Palindrome
* Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
* Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
* Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. 
* Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    let panjang = kata.length;
    let kata_terbalik = '';

    for(let i = panjang-1; i >= 0; i--){
        kata_terbalik += kata[i];
    }

    if(kata === kata_terbalik){
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false