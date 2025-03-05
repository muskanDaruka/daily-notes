// const s = "ab", goal = "ba"
// var buddyStrings = function (s, goal) {
//     a = s.split('')
//     if(s.length!==goal.length) return false
//     for(let i = 0; i<a.length-1; i++){
//         for(let j = a.length-1; j>i; j--){
//             if(i!==j){
//                 let temp = a[i]
//                 a[i] = a[j]
//                 a[j] = temp
//             }
//         }
//         a.join('')
//     }
//     if(a === goal){
//         return true
//     }else {
//         return false
//     }
// };
// console.log(buddyStrings(s,goal))


// const m = "   fly me   to   the moon  "
// var lengthOfLastWord = function(s) {
//    return s.trim().split(' ').pop().length
// };
// console.log(lengthOfLastWord(m))

const num = 19;

function happyNumber(num){
    const getSumOfSquares = (n) => {
        let sum = 0;
        while(n>0){
            let digit = n%10;
            sum = sum + (digit*digit)
            n = Math.floor(n/10);
        }
        return sum;
    }
    
let seenNumbers = [];

  while (num !== 1) {
    num = getSumOfSquares(num);
    if (seenNumbers.includes(num)) {
      return false;
    }
    seenNumbers.push(num);
  }

  return true;
}
console.log(happyNumber(num));

const list1 = [1,2,4], list2 = [1,3,4]
var mergeTwoLists = function(list1, list2) {
  list1.push(...list2)
  console.log(list1)
};
mergeTwoLists(list1, list2)