// let mat1 = [   
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// let result = 0
// function matrixDiagonal(){
//     for(let i = 0; i<mat1.length; i++){
//         for(let j = 0; j<mat1.length; j++){
//             if(i===j || i+j===2){
//                 result = result + mat1[i][j]
//                 console.log(mat1[i][j])
//             }
//         }
//     }
//     console.log(result);
// }
// matrixDiagonal()


// let mat1 = [   
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ]

let row = 3;
let col = 3;
let result = ''
function formMatrix(){
    let num = 1;
for(let i = 0; i<row; i++){
    for(let j = 0; j<col; j++){
        result = result + num + ' '
        num++;
    }
}
console.log(result)
}

formMatrix()