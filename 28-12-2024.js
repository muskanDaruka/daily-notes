/*var fullname = "Muskan Daruka"

var obj = {
    fullname: "Hacked Full Name",

    prop: {
      fullname:"Inside Prop",
      getFullname: function () {
        return this.fullname;
      },
    },

    getFullname: function() {
      return this.fullname;
    },

    getFullnameV2: () => this.fullname, //undefined //in browser it will refer to window obj
    // getFullnameV2: () => console.log(this), //{} window obj
    // getFullnameV2: function () {console.log(this)}, //refer to our obj

    getFullnameV3: (function () {
      return this.fullname;
    })(), //it is an IIFE . So here this function will immediately execute and that executed computer value will be assign to getFullnameV3, So here its became property not a function that's why its throw an error

    getFullnameV4: (function () {
      return "Muskan Daruka New";
    })(),

};

console.log(obj.prop.getFullname()); //Inside Prop
console.log(obj.getFullname()); //Hacked Full Name
console.log(obj.getFullnameV2()); //undefined
console.log(obj.getFullnameV4); // Muskan Daruka New
console.log(obj.getFullnameV3()); //error : obj.getFullnameV3 is not a function */




/*const muskan = {
    name: "Muskan Daruka",
    sayName: function(){
      console.log(this.name);
    },
  };
  
  const john = {
    name: "John Doe",
    sayName: function(){
      console.log(this.name);
    },
  };
  
  john.sayName.call(muskan); //it will not give new instance instead call will directly give the function .//Muskan Daruka  : here inside john function this.name will refer to muskan as call is of muskan
  john.sayName(); //John Doe  */


 /* const muskan = {
    name: "Muskan Daruka",
    sayName: function(){
        console.log(this.name);
    }
  }
  setTimeout(()=>muskan.sayName(),3*1000); //Closure 
  setTimeout(muskan.sayName, 3*1000);
  setTimeout(muskan.sayName.bind(muskan), 3*1000);*/ //Muskan Daruka //bind will create a new function -> it will bind sayName function with muskan and give new function out of it.


  /*const obj = {
    height: 30,
  }
  console.log(obj.height); //30
  
  delete obj.height;
  
  console.log(obj.height) //undefined


  const objj = Object.create( {
    height: 30,        //as here object.create will keep height in prototype that's why it will no more be in objj
  })
  console.log(objj.height); //30
  
  delete objj.height;   // that's why, when will try to delete height it will be not get it in objj as it's in prototype
  
  console.log(objj.height) */    //30  as its not deleted, it will give 30 as output.



  // function a(){
  //   console.log("A")
  // }
  
  // setTimeout(() => console.log("B"),0);
  
  // a();
  
  // console.log("C")
  // Promise.resolve().then(()=>console.log("D"));

  /*async function getData(){
    return 1;
  }

  console.log("A");
  console.log("B");

  setTimeout(()=>{
    console.log("C"), 0
  })

  getData().then(()=>{
    console.log("I got the data");
  })

  console.log("D");
  console.log("E");
  console.log("F")*/


  /*console.log("A");
  console.log("B");

  setTimeout(()=>console.log("C"), 1*1000)

  fetch('https://api.github.com/users/muskanDaruka').then(()=>{
    console.log("I got the data");
  })

  console.log("D");
  console.log("E");
  console.log("F")*/

  
 /* let a = 10;
  let b = 20;

  let result = a+b;
  async function getData(){
    let resultFromServer = await fetch ("https://api.github.com/users/muskanDaruka");
    console.log(await resultFromServer.json())
  }

  getData();
  console.log(result) // first this will execute after that function will be execute as like sync it will not wait till the async function gives the result it will work in background whenever the task will be fulfilled it will give the result. Await is working to make async promise wait till the task get fulfilled.
 
  // output: 30
  //         api Response  */



  //closure:
  /*function main() {
    const name = 'Muskan Daruka'
    function sayName(){   //this inner function is closure
      console.log(name); //this name is comming from lexical environment(surrounding state) i.e from 154 line no. 
    }
    sayName(); //this is Closure
  }
  main(); */

  /* function main() {
    const name = 'Muskan Daruka'
    function sayName(){  
      console.log(name);
    }
    return sayName; 
  }
  let fn = main();

  fn();
  fn();
  fn();*/

//   function main(name) {
//       function sayName(){  
//         console.log(name);
//       }
//       return sayName; 
//     }
//     let consoleMuskan = main("Muskan");
  
//     consoleMuskan();
//     consoleMuskan();
//     consoleMuskan();
   
// console.log(consoleMuskan);

/*function adder(num){
  function add(b){
    console.log(num+b)
  }
  return add;
}
const addTo5 = adder(5);
const addTo10 = adder(10);


addTo5(2); //utility function
addTo5(10); */



