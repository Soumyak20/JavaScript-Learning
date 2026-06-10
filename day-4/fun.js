function printname(name){
// local variables
console.log(name)
}
let name ="soumya";
printname(name) //if we pass without parameter it give undefined

// ----------------sum-------------------
function sum(n1, n2){
    console.log(n1 + n2)
}
sum (1 ,2 );

// ----------------multiply------------
function multiply(num1 , num2){
    console.log("before return");
    return num1 * num2;//after retun code directly goes to outsied
        console.log("after return");//unreachable code

}
let ans = multiply(2, 2)
console.log(ans)




// --------------arrow fun------------
let myarrowfunction = (para1, para2)=>{
    //--
}


((1, 1)); {
    console.log((1, 1));
}("hello")
