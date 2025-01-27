// console.log("print me");
// // let,var and const data types
// var x=10;
// console.log(x);
// x=20;
// console.log(x);
// const m=20;
// console.log(m);

// let n=30;
// console.log(n);
// block scope,local function and global 
// function letExample()
// {
//     //console.log(a);
//     let a=10;
//     console.log(a);
//     if(true)
//     {
//         let a=20;
//         console.log(a);
//     }
//     console.log(a);
// }
// letExample();
// let name="xxx";
// console.log(typeof name);

// let num=10;
// if (num>5)
// {
//     console.log("Greater than 5");
// }
// else {
//     console.log("5 or less");
// }

// for(let i=0;i<3;i++)
// {
//     console.log("data: "+i);
// }

// function letScope()
// {
//     for(let i=0;i<3;i++)
//     {
//         console.log("Data: "+i);
//     }
//    // console.log("outside block: "+i);
// }

// letScope();
// ES6 concept
// Synchronous example
// console.log("start");
// function fetchData()
// {
//     console.log("Fetching data");
//     for(let i=0;i<5;i++)
//     {
//         console.log("Data to process"+i);
//     }
//     console.log("Data fetched");
// }
// fetchData();
// console.log("End");

//Asynchronous 
// console.log("Start");

// setTimeout(()=>{
//     console.log("Fetching data");
// },2000);
// console.log("End");

//Asynchronous with promises 
// console.log("Start");
// const fetchData=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data fetched-success");
//     },2000);
//     });

//     fetchData.then((data)=>{
//     console.log(data);
//     })
//     .catch((error)=>{
//         console.log("Error:",error);
//     });
//     console.log("End");
//closure 
// function outerFunction(outervariable){
//     return function innerFunction(innervalue)
//     {
//         console.log("outer variable: ${outervariable}");
//         console.log("inner variable:${innervalue}");
//     };
// }

// const closureFunc=outerFunction("Outer value");
// closureFunc("Inner value");
//currying
// function multiply(a)
// {
//     return function(b)
//     {
//         return function(c)
//         {
//             return a*b*c;
//         };
//     };
// }

// console.log(multiply(2)(3)(4));
//prototype

// function Person(name)
// {
//     this.name=name;
// }
// Person.prototype.greet=function(){
//     console.log("current name is ${this.name}");
// };

// const alice = new Person("Alice");
// alice.greet();

//nested functions
function outerFunction()
{
    const outervariable="outer";
    function innerFunction()
    {
        console.log("Accessing: ${outervariable}")
    }
    innerFunction();

}

outerFunction();