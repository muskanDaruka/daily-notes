// console.log(typeof null);
// console.log(typeof []);


// const arr = [1,2,3];

// const fn = () => {
//     return 123;
// }

// const obj = {foo:123};

// console.log(Object.prototype.toString.call(arr));
// console.log(Object.prototype.toString.call(obj));
// console.log(Object.prototype.toString.call(fn));



// const obj = {
//     count: 10,
//     doSomethingLater() {
//       setTimeout(() => {
//         this.count++;
//         console.log(this.count); // 11 (obj's count is originally 10, 10++ will be 11)
//       }, 300);
//     },
//   };
//   obj.doSomethingLater();
  

//   console.log(typeof typeof 1);
//   console.log(0.1 + 0.2 == 0.3);
//   const numbers = [33, 2, 8];
// numbers.sort();
// console.log(numbers[1]);


// console.log(false == "0");

// let array = [1, 2, 3];
// array[6] = 9;
// console.log(array[5]);

// console.log(typeof NaN);

// console.log(("b" + "a" + +"a" + "a").toLowerCase());

// const isTrue = true == [];
// const isFalse = true == ![];
// console.log(isTrue + isFalse);


// function useState(initialState) {
//     let state = initialState;
  
//     function getState() {
//       return state;
//     }
  
//     function setState(updatedState) {
//       state = updatedState;
//     }
//     return [getState, setState];
//   }
  
//   const [count, setCount] = useState(0);
  
//   console.log(count());
//   setCount(1);
//   console.log(count());
//   setCount(500);
//   console.log(count());

// const arr = ["apple","orange","banana","grapes"]

// for(const item of arr){
//     if(item === "banana"){
//         // continue;
//         console.log(item)
//     }
//     // console.log(item)
// }


// const arr = [1,2,3,4]

// // const newArr = arr.map((ele)=>ele*2).filter((ele)=>ele%2===0)
// // const newArr = arr.map((ele)=>ele*2)
// // const newArr = arr.filter((ele)=>ele%2===0)
// const newArr = arr.filter((ele)=>ele%2)
// console.log(newArr);


const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  const newStu = students.filter((student)=>student.grade>=90)
  console.log(newStu)


  const arr = [1,2,3,4,5]
  const newSum = arr.reduce((acc,ele)=>{
    return acc = acc+ele;
  },0)
  console.log(newSum);

//   Given an array of objects users, print fullname.

const users=[
  {firstName:"john",lastName:"Biden",age:26},
  {firstName:"jimmy",lastName:"cob",age:75},
  {firstName:"sam",lastName:"lewis",age:50},
  {firstName:"Ronald",lastName:"Mathew",age:26},  
];

const person = users.map((user)=>user.firstName + " " + user.lastName)
console.log(person)


// Given an array of objects users, print user of particular age along with their frequency.

const users1=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];

  const persons = users1.reduce((acc, ele)=>{
    if(acc[ele.age]){
        acc[ele.age]++;
    } else {
        acc[ele.age] = 1;
    }
    return acc
  },{})

  console.log(persons)

//   Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let student =[
 {name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
 {name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}
];

const newStudent = student.map((stu)=> {
    if(stu.marks<60){
        stu.marks+=20
    }
    return stu
}).filter((stu)=>stu.marks>60).reduce((acc,stu)=>acc+stu.marks,0)
console.log(newStudent)


const num = [1,2,2,3,4,6,5,5,5,5,8,8,9,9,9]

// const uniqueNum = [...new Set(num)]
// console.log(uniqueNum)

// const uniqueNum = num.filter((value,index,ele)=> ele.indexOf(value)===index)
// console.log(uniqueNum)

const uniqueNum = num.reduce((acc, ele)=>{
    if(!acc.includes(ele)){
        acc.push(ele)
    }
    return acc;
},[])
console.log(uniqueNum)


//get the total score of force users only

var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];

  const totalScore = personnel.filter((user)=>user.isForceUser).map((user)=>user.pilotingScore + user.shootingScore).reduce((acc,score)=>{
    return acc = acc + score
  })
  console.log(totalScore)