// function printname(name){
// local variables
// console.log(name)
// }
// let name ="soumya";
// printname(name) //if we pass without parameter it give undefined

// ----------------sum-------------------
// function sum(n1, n2){
//     console.log(n1 + n2)
// }
// sum (1 ,2 );

// // ----------------multiply------------
// function multiply(num1 , num2){
//     console.log("before return");
//     return num1 * num2;//after retun code directly goes to outsied
//         console.log("after return");//unreachable code

// }
// let ans = multiply(2, 2)
// console.log(ans)

// -----------------arrow fun---------------------------
// let myarrowfunction = (para1, para2)=>{
//     //--
// }


// ((1, 1)); {
//     console.log((1, 1));
// }("hello")

// let arr = [1, 2, 3, 5]

// arr.forEach((val) => {
//     console.log(val * val);
// })

// arr.forEach(function printval(a) {
//     console.log(a)
// }
// )


//----------------------------------------------
// let arr = [1, 2, 3, 4]
 
// arr.forEach((val, idx, arr)  => {
//     console.log(idx,"val=", val, arr)
// }
// )


//-----------------------------------------------
// let arr = [1, 2, 3, 4, 5]
 
// let square = arr.map((val) => {
//     console.log(val * val);
// });


//------------------------------------------------
// let arr = [1, 2, 3, 4]  //even print  

// let even = arr.filter((val) => {
//     if (val >=2000 && val <=3000){   // if we want odd !
//         return true;
//     }
//      else{
//         return false;
//      }
// })

//------------------------------------------
// let arr = [1, 2, 3, 4];

// let even = arr.filter((val) => {
//     return val % 2 == 0;
// });
// console.log(even);


//-----------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let num = arr.reduce((curr, next) => {
//     return curr + next;
// });
// console.log(num);

//--------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// let num = arr.reduce((curr, next) => {
//     if (curr > next) {
//          return curr;
//     } else {
//         return next;
//     }
// });

// console.log(num); 

//----------------------------------------------------
// const students = [
//     { name: "Omkar", marks: 85 },
//     { name: "Rohit", marks: 92 },
//     { name: "Amit", marks: 78 },
//     { name: "Sneha", marks: 96 },
//     { name: "Priya", marks: 88 }
// ];

// let result = students.filter((student) => {
//     return student["marks"] >= 80;
// });

// console.log(result);

//------------------------------------------------------
// const students = [
//     { name: "Omkar", marks: 85 },
//     { name: "Rohit", marks: 92 },
//     { name: "Amit", marks: 78 },
//     { name: "Sneha", marks: 96 },
//     { name: "Priya", marks: 88 }
// ];

// let result = students.map((student) => {
//     return student["name"];
// });

// console.log(result);

//--------------------------------------------------------------------
 const std = [
     { name: "Omkar", marks: 85 },
     { name: "Rohit", marks: 92 },
     { name: "Amit", marks: 78 },
     { name: "Sneha", marks: 96 },
     { name: "Priya", marks: 88 }
 ];

 let std2 = std.reduce((cur,nxt)=>{
  return cur + nxt["marks"];

},0);

 console.log(std2/std.length);


//--------------------------------------------------------------------

const nums = [3, 8, 12, 5, 20, 7, 15];

let result = nums.filter(num => num % 3 == 0 || num % 5 == 0)
console.log(result);


const nums = [3, 8, 12, 5, 20, 7, 15];

const result = nums.map(num => num * num)
console.log(result);


const nums = [3, 8, 12, 5, 20, 7, 15];

const result = nums.reduce((sum, num) => sum + num, 0);
console.log(result);


