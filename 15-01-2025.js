//this object

/*// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       console.log( user.name ); //error bcz of line 16
//       console.log( this.name ); //John
//     }
  
//   };
  
  
//   let admin = user;
//   user = null;
  
//   admin.sayHi();*/

/*// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log( this.name );
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f(); 
// admin.f(); 

// admin['f']();*/



/*function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // undefined -> as name and ref is inside makeUser, name is not there inside ref.
*/

// const users = {
//   name:"Muskan",
//   age:24
// }
// function sayHi(){
//   console.log(this.name)
// }

// sayHi();


// const person = {
//   firstname : "Muskan",
//   lastname : "Daruka",
//   age: 24,
//   getFullName : function(){
//     return this.name + " " + this.lastname;
//   }
// };
// console.log("this is object method", person.getFullName());



// const show = () => this


// console.log('arrow function this', show())



let user = {
  name: "Piyush",
  age: 24,
    childObj:{
        newName:"Roadside Coder",
        getDetails() {
          console.log(this.newName, "and" ,this.name);
        }
    }
};
user.childObj.getDetails();