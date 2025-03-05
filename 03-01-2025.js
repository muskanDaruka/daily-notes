const arr = [1, 0, 3, 0, 5, 0, 7]
const arr2 = ["Shivendra","Komal","Muskan","Unnati","Dhavani","Queensi","Ayushi"]

function arrSq(num) {  
//    const result = num.filter(el => el!==0).map(el => el*el).find(el => el%5===0)
//    return result;
 
const result = num.reduce((acc, el, i)=>{
    acc[el] = arr2[i]
    return acc;
},{})
return result; 

//{
//     '0': 'Queensi',
//     '1': 'Shivendra',
//     '3': 'Muskan',
//     '5': 'Dhavani',
//     '7': 'Ayushi'
//   }

}

const output = arrSq(arr);
console.log(output);