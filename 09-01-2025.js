// // ## Rule  - **Arrow Functions does not bind 𝑡𝒽𝑖𝓈 at all**

// // - In an arrow function, the **`this`** keyword behaves like any other variable, the **`this`** gets lexically resolved from one of its parent's scope (Just like any other variable).
// // - if its a regular function, how the function is invoked matters to determine **`this`**!! - if it's an arrow function, where the function sits (lexically) matters to determine **`this`**, no matter how it was invoked!!
// // - when you want the **`this`** keyword to resolve lexically from one of its parent's scope, use the arrow function - when you want the **`this`** keyword to resolve dynamically at the call site, use the regular functions.

var john = { name: "John Doe", age: 25 };

var sayArrowHello = () => {
  console.log("Arrow Hello ", this);
};

function sayRegularHello() {
  console.log("Regular Hello ", this);
}

function sayRegularName() {
  console.log("My Regular name is ", this.name, this); 
  sayRegularHello();
  sayArrowHello();
  var sayArrowGoodBye = () => {
    console.log("Arrow GoodBye ", this); 
  };
  sayArrowGoodBye();
}

sayRegularName.call(john);

// //## Rule  - **the hard binding of 𝑡𝒽𝑖𝓈 using `bind`**
// //**`bind`** creates a new function hard bound to the object that we have specified.

// function sayHello() {
//     console.log("Hello! ", this, this.name);
//   }
  
//   var John = {
//     name: "John Doe",
//     age: 30
//   };
  
//   var johnSayHello = sayHello.bind(John);
  
//   johnSayHello();




//   const object = {
//     message: 'Hello, World!',
  
//     getMessage() {
//       const message = 'Hello, Earth!';
//       return this.message;
//     }
//   };
  
//   console.log(object.getMessage());


//   function Pet(name) {
//     this.name = name;
  
//     this.getName = () => this.name;
//   }
  
//   const cat = new Pet('Fluffy');
  
//   console.log(cat.getName()); 
  
//   const { getName } = cat;
//   console.log(getName());




//   const objecta = {
//     message: 'Hello, World!',
  
//     logMessage() {
//       console.log(this.message); 
//     }
//   };
  
//   setTimeout(objecta.logMessage, 1000);





// const str = "jonoj"

// function isPalindrome(word){
//     for(let i = 0,j=word.length-1; i<j; i++,j--){
//         if(word[i]!==word[j]){
//             return false;
//         }
        
//     }
//     return true;
// }
// console.log(isPalindrome(str));


// function total(arr) {
//     return arr.reduce((acc, element) => {
//       return acc + element;
//     }, 0);
//   }
  
//   console.log(total([1, 2, 3])); 
  

//Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//    return arr.join('')
// }

// console.log(stringConcat([1,2,3]));

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

//  function totalVotes(arr) {
//     return arr.filter((el) => el.voted === true).length;
// }
 
//  console.log(totalVotes(voters));


// // Given an array of arrays, flatten them into a single array
// function flatten(arr) {
//   return arr.reduce((acc,ele)=>acc.concat(ele),[])
// }

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// console.log(flatten(arrays));


// Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    return arr.reduce((acc,voter)=>{
//     if(voter.age>=18 && voter.age<=25){
//         acc.num
//     }
//    })
// }

// console.log(voterResults(voters)); 



// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];
//    const details= student.filter((x)=>x.marks>60 && x.rollNumber>15);
//    console.log(details); 

//Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
   
// let students =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:69},
//     {name:"John",rollNumber:16,marks:35},
//     {name:"Tiger",rollNumber:7,marks:55}
//    ];
   
//    const totalMarks=students.map((stu)=>{
//         if(stu.marks<60){
//             stu.marks = stu.marks + 20
//         }
//         return stu;
//    }).filter((stu)=>stu.marks>60).reduce((acc,stu)=> acc + stu.marks,0)
       
//    console.log(totalMarks);

// function modifyArr(arr, callback){
//     arr.push(100);
//     callback();
// }
// var arr = [1,2,3,4,5]
// modifyArr(arr,function() {
//     console.log("array modified",arr)
// })

// const obj1 =   
// {    
//     a: 10,    
//     b: 15,    
//     c: 18    
// };    
// const obj2 = Object.assign({c: 11, d: 12}, obj1);    
// console.log(obj2.c, obj2.d);  


// const charStr = "hello"
// const str = charStr.split('')
// function reverseString(){
//     for(let i=0,j=str.length-1; i<j; i++,j--){
//         let temp = str[i]
//         str[i] = str[j]
//         str[j] = temp
//     }
//     return str.join('');;
// }
// console.log(reverseString());

