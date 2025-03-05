// const arr = [1, 5, 8, 10, 37, 98, 202]

// function reverseArray() {
//     for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }

// const output = reverseArray()
// console.log(output);

// const num = 252;

// function palindrome() {
//     for (let i = 0, j = num.lenght - 1; i < j; i++, j--) {
//         if (num[i] !== num[j]) {
//             console.log(num, 'Is not a palindrome number')
//             return false;

//         }
//     }
//     console.log(num, 'Is palindrome')
//     return true;
// }
// const answer = palindrome();
// console.log(answer);
//====================================================

// const row = 4;
// function squarePattern() {
//     for (let i = 0; i < row; i++) {
//         let line = ' '
//         for (let j = 0; j < row; j++) {
//             line = line + '*'
//         }
//         console.log(line)
//     }
// }
// squarePattern();

//==========================================================

// const l = 4;
// function boxPattern() {
//     for (let i = 0; i < l; i++) {
//         let line = ' '
//         for (let j = 0; j < l; j++) {
//             if (i === 0 || i === l - 1 || j === 0 || j === l - 1) {
//                 line = line + '*'
//             }
//             else {
//                 line = line + ' '
//             }
//         }
//         console.log(line)
//     }
// }
// boxPattern();

//================================================================

// const row = 4;
// function southRightPattern() {
//     for (let i = 0; i < row; i++) {
//         let line = ' '
//         for(let j = 0 ; j < i; j++){
//             line = line + ' '
//         }
//         for (let j = 0; j < row; j++) {
//             line = line + '*'
//         }
//         console.log(line)
//     }
// }
// southRightPattern();

//===================================================================

// const row = 6;
// const col = 4
// for(let i = 0; i<col; i++){
//     line = '' 
//     for(let j = 0; j<row; j++){
//         line = line + "*"
//     }
//     console.log(line)
// }

//=======================================================================

// const row = 6;
// const col = 4;

// for(let i = 0; i<col; i++){
//     line = ''
//     for(let j = 0; j<row; j++){
//         if(i===0 || i===col-1 || j===0 || j===row-1){
//             line = line + "*"
//         }else {
//             line = line + ' '
//         }
//     }
//     console.log(line)
// }

//====================================================================

// const row = 6;
// const col = 4;

// for(let i = 0; i<col; i++){
//     line = ''
//     for(let j = 1; j<i+1; j++){
//         line = line + " "
//     }
//     for(let j = 0; j<row; j++){
//         line = line + "*"
//     }
//     console.log(line)
// }

//====================================================================

// const row = 6;

// for(let i = 0; i<row; i++){
//     line = ''
//     for(let j = 0; j<i+1; j++){
//         line = line + "*"
//     }
//     console.log(line)
// }

//=======================================================================

const row = 4

for(let i = 0; i<row; i++){
    line = ''
    for(let k = row; k>i+1; k--){
        line = line + " "
    }
    for(let j = 0; j<=i*2; j++){
        line = line + "*"
    }
    console.log(line)
}