/*
* Menggunakan Built-in Function pada Array
* Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya.
* Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort.
* Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.
*/

function dataHandling2(arr) {
    arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(arr);

    var tanggal = arr[3].split('/');
    var nama_bulan = '';
    
    switch (Number(tanggal[1])) {
        case 1: 
            nama_bulan = 'Januari';
            break;
        case 2:
            nama_bulan = 'Februari';
            break;
        case 3:
            nama_bulan = 'Maret';
            break;
        case 4:
            nama_bulan = 'April';
            break;
        case 5:
            nama_bulan = 'Mei';
            break;
        case 6:
            nama_bulan = 'Juni';
            break;
        case 7:
            nama_bulan = 'Juli';
            break;
        case 8:
            nama_bulan = 'Agustus';
            break;
        case 9:
            nama_bulan = 'September';
            break;
        case 10:
            nama_bulan = 'Oktober';
            break;
        case 11:
            nama_bulan = 'November';
            break;
        case 12:
            nama_bulan = 'Desember';
            break;
    
        default:
            break;
    }
    console.log(nama_bulan);
    tanggal.sort(function(value1, value2) { return value2 - value1 });
    console.log(tanggal);
    
    var tanggal_strip = arr[3].split('/');
    console.log(tanggal_strip.join('-'));
    console.log(arr[1].slice(0,14));
}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]);