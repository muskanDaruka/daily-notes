// const obj = {
//     value: 42,
//     getValueArrow: () => console.log(this.value),
//     getValueRegular: function () {
//       console.log(this.value);
//     }
//   };

//   obj.getValueArrow(); //undefined
//   obj.getValueRegular(); //42


// const obj = {
//     value: 42,
//     getValueArrow() {
//         const self = this;                               //arrow function => doesn't have its own this => inherits from its lexical scope
//         return () => console.log(self.value);
//     },
//     getValueRegular: function () {
//         console.log(this.value);
//     }
// };

// const fn = obj.getValueArrow();
// fn(); //42
// obj.getValueRegular(); //42

//===================================================================//

// const obj1 = {
//     value: 42,
//     greet() {
//         setTimeout(function () {
//             console.log(this.value)              //regular funtion => function() inside setimeout have itsown this => which refers to window => which is window.name = "" in browser in this case.
//         }, 1000);
//     }
// }

// obj1.greet();

// const obj1 = {
//     value : 42,
//     greet(){
//         setTimeout(() => {
//             console.log(this.value)               //arrow function
//         },1000)
//     }
// }
// obj1.greet();

//=============================================================//

// function Animal(){
//     Animal.prototype.sound = 'Roar'
// }
// const cat = new Animal
// cat.sound = 'Meow'
// delete cat.sound;
// console.log(cat.sound)

//=================================================================//

// const obj2 = {
//     factor : 2,
//     nums: [1,2,3],
//     multiply(){
//         return this.nums.map(nums => nums * this.factor)
//     }

// }

// console.log(obj2.multiply());

//==================================================================//

// let p = new Promise((resolve, reject)=>{
//     // let isTrue = true
//     let isTrue = false
//     if(isTrue){
//         resolve('Success')
//     }else {
//         reject('Failed')
//     }
// })

// p.then(message => console.log(`Promise resolved: ${message}`))
// .catch(message => console.log(`Promise rejected: ${message}`))

//========================================================================//

// function stepOne(value) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(value);
//         resolve();
//       }, 3000);
//     });
//   }

//   function stepTwo(value) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(value);
//         resolve();
//       }, 2000);
//     });
//   }

//   function stepThree(value) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(value);
//         resolve();
//       }, 1000);
//     });
//   }

//   stepOne(1)
//     .then(() => stepTwo(2))
//     .then(() => stepThree(3))
//     .then(() => {
//       console.log("All steps completed.");
//     });

//====================================================================//

// p1.then(message1 => {
//     return p2.then(message2 => {
//         return p3.then(message3 => {
//             return [message1, message2, message3];
//         });
//     });
// }).then(messages => {
//     console.log(messages);
// })

const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

Promise.any([p1, p2, p3]).then(response => {
  console.log(response);
});

