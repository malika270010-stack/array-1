// function qoshilma(arr) {
//   let qosh = 0;
//   for (let i of arr) {
//     qosh += i;
//   }
//   return qosh;
// }
// console.log(qoshilma([1, 2, 3, 4, 5, 6, 7]));

// function qoshilma(arr) {
//   let qosh = 0;
//   for (let i of arr) {
//   }
//   if (i % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(qoshilma([1, 2, 3, 4, 5, 6, 7]));

// let users = [
//   {
//     id: 1,
//     name: "fayzullohon",
//     age: 14,
//   },
//   {
//     id: 2,
//     name: "Bexruzbek",
//     age: 22,
//   },

//   {
//     id: 3,
//     name: "Asadbek",
//     age: 26,
//   },

//   {
//     id: 4,
//     name: "Dostonbek",
//     age: 19,
//   },
//   {
//     id: 5,
//     name: "Inomjon",
//     age: 12,
//   },
// ];

// function usersAge(arr) {
//   let init = arr[0];
//   for (let i of arr) {
//     if (init.age < i.age) {
//       init = i;
//     }
//   }
//   return init;
// }
// console.log(usersAge(users));

// function usersAge(arr) {
//   let yosh = [];
//   for (let i of arr) {
//     if (i.age >= 18) {
//       yosh.push(i);
//     }
//   }
//   return yosh;
// }
// console.log(usersAge(users));
// =========================================================================================
const products = [
  { id: 1, name: "iPhone 16", price: 12000000, category: "phone", stock: 10 },
  { id: 2, name: "Samsung S25", price: 10000000, category: "phone", stock: 5 },
  { id: 3, name: "MacBook Air", price: 15000000, category: "laptop", stock: 3 },

  { id: 4, name: "Redmi Note 14", price: 2500000, category: "phone", stock: 0 },
  {
    id: 5,
    name: "AirPods Pro",
    price: 2000000,
    category: "accessory",
    stock: 15,
  },
  {
    id: 6,
    name: "Lenovo Legion",
    price: 13000000,
    category: "laptop",
    stock: 2,
  },
  {
    id: 7,
    name: "Samsung Buds",
    price: 1500000,
    category: "accessory",
    stock: 0,
  },
  { id: 8, name: "iPad Air", price: 8000000, category: "tablet", stock: 7 },
  {
    id: 9,
    name: "Xiaomi Band",
    price: 500000,
    category: "accessory",
    stock: 20,
  },
  { id: 10, name: "HP Pavilion", price: 9000000, category: "laptop", stock: 4 },
];
// 1-topshiriq
// function getMostExpensiveProduct(arr) {
//   let init = arr[0];
//   for (let i of arr) {
//     if (init.price < i.price) {
//       init = i;
//     }
//   }
//   return init;
// }
// console.log(getMostExpensiveProduct(products));
// ===================================================================================================
// 2 - topshiriq;
// function getCheapestProduct(arr) {
//   let init = arr[0];
//   for (let i of arr) {
//     if (init.price > i.price) {
//       init = i;
//     }
//   }
//   return init;
// }
// console.log(getCheapestProduct(products));
// ====================================================================================================
// 3. Mahsulotlar soni
// Array ichida jami nechta mahsulot borligini aniqlaydigan getProductsCount() funksiyasini yozing.
// function getProductsCount(arr) {
//   return arr.length;
// }
// console.log(getProductsCount(products));
// ===================================================================================================
// 4. ID bo‘yicha qidirish
// Berilgan id orqali mahsulotni topib qaytaradigan getProductById(id) funksiyasini yozing. Agar
// mahsulot topilmasa, "Product not found" qaytarsin.

// function getProductById(id) {
//   for (let i of products) {
//     if (i.id === id) {
//       return i;
//     }
//   }

//   return "Product not found";
// }
// console.log(getProductById(3));
// console.log(getProductById(6));
// ===================================================================================================
// 5. Narxi bo‘yicha qidirish
// Narxi 10 000 000 so‘mdan yuqori bo‘lgan barcha mahsulotlarni aniqlaydigan getExpensiveProducts()
// funksiyasini yozing.

// function getExpensiveProducts(productt) {
//   let arr = [];
//   for (let i of productt) {
//     if (i.price > 10000000) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getExpensiveProducts(products));
// =================================================================================================
// 6. Ombordagi mahsulotlar
// stock qiymati 0 dan katta bo‘lgan mahsulotlarni aniqlaydigan getAvailableProducts() funksiyasini
// yozing.
// function getAvailableProducts(ombor) {
//   let arr = [];
//   for (let i of ombor) {
//     if (i.stock > 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getAvailableProducts(products));
// ==================================================================================================
// 7. Tugagan mahsulotlar
// stock qiymati 0 ga teng bo‘lgan mahsulotlarni aniqlaydigan getOutOfStockProducts() funksiyasini
// yozing.
// function getOutOfStockProducts(ombor) {
//   let arr = [];
//   for (let i of ombor) {
//     if (i.stock <= 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getOutOfStockProducts(products));
// =================================================================================================
// 8. Kategoriya bo‘yicha qidirish
// Berilgan kategoriya bo‘yicha barcha mahsulotlarni chiqaradigan getProductsByCategory(category)
// funksiyasini yozing.
// function getProductsByCategory(category) {
//   let arr = [];
//   for (let i of products) {
//     if (i.category === category) {
//       arr.push(i);
//     }
//   }

//   return arr;
// }
// console.log(getProductsByCategory("laptop"));
// console.log(getProductsByCategory("accessory"));
// ================================================================================================
// 9. Narxlar yig‘indisi
// Barcha mahsulotlarning narxlari yig‘indisini hisoblaydigan getTotalPrice() funksiyasini yozing.
// function getTotalPrice(total) {
//   let qosh = 0;
//   for (let i of total) {
//     qosh += i.price;
//   }
//   return qosh;
// }
// console.log(getTotalPrice(products));
// ====================================================================================================
// 10. O‘rtacha narx
// Barcha mahsulotlarning o‘rtacha narxini hisoblaydigan getAveragePrice() funksiyasini yozing.
// function getAveragePrice(ortacha) {
//   let count = 0;
//   for (let i of ortacha) {
//     count += i.price;
//   }
//   return count / ortacha.length;
// }
// console.log(getAveragePrice(products));
// ====================================================================================================
// 11. Narx oralig‘i
// Berilgan minimal va maksimal narx oralig‘idagi mahsulotlarni aniqlaydigan getProductsByPrice(min,
// max) funksiyasini yozing.
// function getProductsByPrice(min, max) {
//   let arr = [];
//   for (let i of products) {
//     if (i.price >= min && i.price <= max) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getProductsByPrice(2000000, 10000000));
// ======================================================================================================
// 12. Mahsulot mavjudligini tekshirish
// Berilgan nomdagi mahsulot mavjud yoki mavjud emasligini aniqlaydigan checkProduct(name)
// funksiyasini yozing. Natija true yoki false bo‘lsin
// function checkProduct(name) {
//   for (let i of products) {
//     if (i.name === name) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(checkProduct("iPhone 16"));
// console.log(checkProduct("MacBook Air"));
// console.log(checkProduct("Honor"));
