// const row = 4;

// function sqPattern(){
//     for(let i = 0; i<row; i++){
//         let line = ''
//         for(let j = 0; j<row; j++){
//             line = line + "*"
//         }
//         console.log(line)
//     }
// }
// sqPattern();

// const row = 4;

// function rhombusPattern(){
//     for(let i = 0; i<row; i++){
//         let line = ""
//         for(let j = 0; j<i; j++){
//             line = line + " "
//         }
//         for(let j = 0; j<row; j++){
//             line = line + "*"
//         }
//         console.log(line)
//     }
// }

// rhombusPattern()

// const row = 4;

// function hollowPattern(){
//     for(let i = 0; i<row; i++){
//         let line = ""
//         for(let j = 0; j<row; j++){
//             if(i===0|| i===row-1|| j===0 || j===row-1){
//                 line = line + "*"
//             } else {
//                 line = line + " "
//             }
//         }
//         console.log(line)
//     }
// }

// hollowPattern()

// const row = 6;
// const col = 4; 

// function rectanglePattern(){
//     for(let i = 0; i<col; i++){
//         let line = ""
//         for(let j = 0; j<row; j++){
//             line = line + "*"
//         }
//         console.log(line)
//     }
// }
// rectanglePattern()

let num = 4;

for(let i = 0; i<num ; i++){
    let line = ''
    for(let j = 0; j<num-i-1; j++){
        line = line + " "
    }
    for(let j = 0; j<i*2+1; j++){
        line = line + "*"
    }
    console.log(line)
}
for(let i= 1; i<num; i++){
    let line = ''
    for(let j = 0; j<i; j++){
        line = line + ' '
    }
    for(let j = 0; j<(num-i)*2-1; j++){
        line = line + "*"
    }
    console.log(line)
}