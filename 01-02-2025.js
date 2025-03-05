// const personPrototype = {
//     city: "New York",
//     greet() {
//         console.log(`Hello from ${this.city}`);
//         console.log(`Hello,my name is ${this.name}`);
//     }
// }
// // personPrototype.greet();
// // Object.getPrototypeOf(personPrototype);  
// // personPrototype.toString();  

// function Person(name){
//     this.name = name
// }

// Object.assign(Person.prototype, personPrototype);

// const muskan = new Person('muskan')
// console.log(Object.hasOwn(muskan,'name'));
// console.log(Object.hasOwn(muskan,'greet'));
// muskan.greet()


// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     return n * factorial(n-1)
// }
// const output = factorial(5)
// console.log(output)

// function fibonacci(n){
//     if(n===0 || n===1){
//         return n;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// const output = fibonacci(5)
// console.log(output);
// 0,1,1,2,3,5

myObject = {
    name:"Muskan",
    age:24
}

delete myObject.age;
console.log(myObject);
