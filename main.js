// let strings = ["daniel", "david", "yochai", "shay"];
// strings.forEach((item, index) => {
//   console.log(item, index);
// });

// let num = [1, 2, 3, 5];
// num.forEach((num, i) => {
//   console.log(num, i);
// });

// let numbers = [11, 7, 9, 5, 8];
// numbers.forEach((number) => {
//   if (number % 2 == 0) {
//     console.log("divided");
//   } else {
//     console.log("not");
//   }
// });

// let obj = [
//   {
//     Age: 11,
//     Name: "a",
//   },
//   {
//     Age: 12,
//     Name: "b",
//   },
//   {
//     Age: 13,
//     Name: "c",
//   },
// ];

// for (const element of obj) {
//   console.log(element);
// }

// let me = {
//   Name: "Shimon",
//   age: 22,
// };

// for (const info in me) {
//   console.log(info, me[info]);
// }







// exe.1
// let articles = [
//   {
//     title: "a",
//     writer: "a",
//     date: 2019,
//   },
//   {
//     title: "b",
//     writer: "b",
//     date: 2020,
//   },
//   {
//     title: "c",
//     writer: "c",
//     date: 2030,
//   },
// ];

// articles.forEach((obj) => {
//   console.log(obj);
// });
// for (const obj of articles) {
//   console.log(obj);
// }


// exe.2
// let user = [
//   {
//     Name: "A",
//     age: 1,
//   },
//   {
//     Name: "B",
//     age: 2,
//   },
//   {
//     Name: "C",
//     age: 3,
//   },
// ];

// for (const e of user){
//     for (const inf in user){
//         console.log(inf, user[inf]);
//     }
// };

// let books = [
//     {
//         title: "C",
//         writer: "C",
//         price: 10,
//     },
//     {
//         title: "D",
//         writer: "D",
//         price: 20,
//     },
//     {
//         title: "E",
//         writer: "E",
//         price: 30,
//     },

// ];
// books.forEach((b)=>{
//     console.log(b);
// });
// for ( const key in books){
//     console.log(books[key].writer);
// }


// exe.4
// var numArray = [1 , 2 , 3 , 4 , 5];
// let sum = 0 ;
// numArray.forEach((index)=>{
//     sum+=index ;
// })
// console.log(sum);

// let res = 0 ;
// for (const e of numArray){
//     res+=e
// };
// console.log(res);