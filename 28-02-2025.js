// function sayHello() {
//     var say = function () {
//         console.log(hello)
//     }
//     var hello = "hello, world!!"
//     return say;
// }
// var sayHelloClosure = sayHello();
// sayHelloClosure();

var x= 10;
function foo(a){
    var b = 20;
    function bar(c){
        var d = 30;
        return boop(x+a+b+c+d)
    }
    function boop(e){
        return e*-1
    }
    return bar;
}
var moar = foo(5)

var x = 10;
function foo(){
    var y = 20;
    function bar(){
        var z= 15
        return x+y+z;
    }
    return bar;
}
