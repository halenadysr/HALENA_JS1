// Contoh program JavaScript dengan if, else, nested if

var harga = 12000;
var menu = parseInt(prompt("Menu: \n1. Beli Minuman \n2. Keluar\nSilahkan pilih menu: "));
var jumlah, diskon, totalBelanja, totalAkhir;

if (menu === 1) {
    console.log("Harga Rp 12.000/pcs");
    jumlah = parseInt(prompt("Jumlah minuman: "));
    totalBelanja = jumlah * harga;

    if (totalBelanja >= 50000) {
        diskon = harga * 10 / 100;
    } else {
        diskon = 0;
    }

    totalAkhir = totalBelanja - diskon;
    console.log("Anda membeli minuman sebanyak " + jumlah + " buah\nDengan total harga Rp " + totalBelanja + " dan potongan Rp " + diskon + "\nTotal belanja keseluruhan Rp " + totalAkhir);
} else if (menu === 2) {
    console.log("Anda keluar dari program");
} else {
    console.log("Menu tidak tersedia");
}

// Contoh program JavaScript dengan switch case

var pilihan = 3; // Ganti dengan nilai pilihan yang diinginkan

switch (pilihan) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Penjualan Tas Branded");
        break;
    case 6:
    case 7:
        console.log("Penjualan Sepatu Trendy");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Penjualan Baju High Class")
        break;
    default:
        console.log("Penjualan tidak tersedia");
        break;
}

// Contoh program JavaScript dengan for statement

var pizzaMenu = ['Margherita', 'Pepperoni', 'Cheese Mania', 'Cheeseburger', 'Frankfurter BBQ'];

console.log('Selamat datang di Pizzeria!');
console.log('Menu Pizza:');
for (var i = 0; i < pizzaMenu.length; i++) {
  console.log((i + 1) + '. ' + pizzaMenu[i]);
}

var selectedOption = parseInt(prompt('Pilih nomor pizza yang ingin Anda pesan: '));

if (selectedOption >= 1 && selectedOption <= pizzaMenu.length) {
  console.log('Anda telah memilih ' + pizzaMenu[selectedOption - 1] + '. Selamat menikmati!');
} else {
  console.log('Nomor yang di pilih tidak tersedia');
}

// Contoh program JavaScript dengan while

var destinations = ['Jakarta', 'Bandung', 'Yogyakarta', 'Surabaya'];
var prices = [200000, 150000, 300000, 250000];

console.log('Selamat datang di WanderLuxe Tickets!');
console.log('Daftar Tujuan dan Harga Tiket:');

var i = 0;
while (i < destinations.length) {
  console.log(i + 1 + '. Tujuan: ' + destinations[i] + ', Harga: Rp ' + prices[i]);
  i++;
}

var selectedDestination = parseInt(prompt('Pilih nomor tujuan yang ingin Anda beli tiket: '));

if (selectedDestination >= 1 && selectedDestination <= destinations.length) {
  var chosenDestination = destinations[selectedDestination - 1];
  var ticketPrice = prices[selectedDestination - 1];
  console.log('Anda telah memilih tujuan ' + chosenDestination + ' dengan harga Rp ' + ticketPrice + '. Selamat menikmati perjalanan!');
} else {
  console.log('Nomor yang di pilih tidak tersedia');
}

// Contoh program JavaScript dengan do while

var perfumes = [
    { name: 'Chanel No. 5', price: 500000 },
    { name: 'Dior J\'adore', price: 450000 },
    { name: 'Gucci Bloom', price: 600000 },
    { name: 'Tom Ford Black Orchid', price: 700000 }
  ];
  
  console.log('Selamat datang di EnchantEssence!');
  console.log('Daftar Parfum dan Harga:');
  
  var i = 0;
  do {
    console.log(i + 1 + '. Parfum: ' + perfumes[i].name + ', Harga: Rp ' + perfumes[i].price);
    i++;
  } while (i < perfumes.length);
  
  var selectedPerfume = parseInt(prompt('Pilih nomor parfum yang ingin Anda beli: '));

  if (selectedPerfume >= 1 && selectedPerfume <= perfumes.length) {
    var chosenPerfume = perfumes[selectedPerfume - 1].name;
    var perfumePrice = perfumes[selectedPerfume - 1].price;
    console.log('Anda telah memilih parfum ' + chosenPerfume + ' dengan harga Rp ' + perfumePrice + '.');
  } else {
    console.log('Nomor yang di pilih tidak tersedia');
  }
  
// Contoh program JavaScript dengan function

var menuBoba = {
    classic: 25000,
    taro: 28000,
    matcha: 30000,
    brownSugar: 32000
  };
  
  function displayMenu() {
    console.log('Menu Minuman Boba:');
    for (var item in menuBoba) {
      console.log(item.charAt(0).toUpperCase() + item.slice(1) + ': Rp ' + menuBoba[item]);
    }
  }

  function processOrder(menu, quantity) {
    var totalPrice = menuBoba[menu] * quantity;
    console.log('Anda telah memesan ' + quantity + ' minuman ' + menu + '. Total harga: Rp ' + totalPrice);
  }
 
  displayMenu();
  
  var chosenBoba = prompt('Pilih minuman boba (classic, taro, matcha, brownSugar): ').toLowerCase();
  var quantity = parseInt(prompt('Jumlah minuman yang ingin Anda beli: '));

  if (menuBoba[chosenBoba] && quantity > 0) {
    processOrder(chosenBoba, quantity);
  } else {
    console.log('Menu yang di pilih tidak tersedia');
  }
  