/*
* Menggunakan Built-in Function pada Array
* Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya.
* Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort.
* Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.
* Objectives
* - Mengerti Kegunaan dari Built-in Function yang dimiliki Array
* - Mampu Menggunakan Built-in Function yang dimiliki Array
*/

function dataHandling2(arr) {
    arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(arr);

    var tanggal = arr[3].split('/');
    var namaBulan = '';
    
    switch (Number(tanggal[1])) {
        case 1: 
            namaBulan = 'Januari';
            break;
        case 2:
            namaBulan = 'Februari';
            break;
        case 3:
            namaBulan = 'Maret';
            break;
        case 4:
            namaBulan = 'April';
            break;
        case 5:
            namaBulan = 'Mei';
            break;
        case 6:
            namaBulan = 'Juni';
            break;
        case 7:
            namaBulan = 'Juli';
            break;
        case 8:
            namaBulan = 'Agustus';
            break;
        case 9:
            namaBulan = 'September';
            break;
        case 10:
            namaBulan = 'Oktober';
            break;
        case 11:
            namaBulan = 'November';
            break;
        case 12:
            namaBulan = 'Desember';
            break;
    
        default:
            break;
    }
    console.log(namaBulan);
    tanggal.sort(function(value1, value2) { return value2 - value1 });
    console.log(tanggal);
    
    var tanggalStrip = arr[3].split('/');
    console.log(tanggalStrip.join('-'));
    console.log(arr[1].slice(0,14));
}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]);