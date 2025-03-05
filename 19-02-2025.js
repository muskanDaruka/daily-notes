const arr = [1, 2, 3, 2, 4, 5, 1, 6, 7, 5];

function getUniqueElement(){
    let result = []
    for(let i = 0; i<arr.length-1; i++){
        if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

console.log(getUniqueElement())


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function intersection(){
    let result = []
    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr2.length; j++){
            if(arr1[i]===arr2[j]){
                result.push(arr1[i])
            }
        }
    }   
    return result;
}

console.log(intersection())

let rows = 5;
for (let i = rows; i >= 1; i--) {
  let row = '';
  for (let j = rows; j > i; j--) {
    row += ' ';
  }
  for (let k = 1; k <= i; k++) {
    row += '*';
  }
  console.log(row);
}

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

const numRows = 5;

for (let i = 1; i <= numRows; i++) {
  let row = '';
  for (let j = 1; j <= numRows - i; j++) {
    row += ' ';
  }
  for (let k = 1; k <= i; k++) {
    row += '* ';
  }
  console.log(row);
}

let n1 = 5;
let string1 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string1 += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);

let n3 = 5;
let string3 = "";
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

