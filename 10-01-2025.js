//Closures:

// function outer(){
//     var x = 10;
//     function inner(){
//         var y = 12
//         console.log(x+y);  //closure inner function is having acess of outer function 
//         x = 20
//     }
//     // x = 20;
//     return inner;
// }
// var innerFunc = outer();
// innerFunc(); //22  //32
// innerFunc(); //32


// function outer(){
//     var outerVariable = "Hello,";
//     function inner(name){
//         console.log(outerVariable + name);
//     }
//     return inner;
// }

// var inner = outer();
// inner("muskan");



// var result = []
// for(let i=0; i<5; i++){
//     result[i] = function(){
//         return i;
//     }
// }
// console.log(result[0]()); //5


function run(a1){
    var b1 = a1
    return function(){
        b1 = b1 + 10
        return b1;
    }
}
const fn = run(50);
fn();
console.log(fn());

//Callback function


// function muskan(num){  //here num is pass as a params
//     return num;
// }

// muskan(()=>{})  //the whole is HOF - any function which is pass as an argument in another function is called as high order function,  Here '()' is callback function, here anything will be pass is considered as argument

// setTimeout(function(){
//     console.log("callback funtion eg.")
// },1000)

// function muskan(){
//     var str = "musu"
//     function newMuskan(){
//         console.log(str);
//     }
//     str = "muskiee"
//     return newMuskan;
// }

// var newFunc = muskan();
// newFunc();