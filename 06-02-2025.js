function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));


const arr = [1, 1, 3, 5, 5, 5, 6, 8, 9, 9, 13, 14, 14, 16]

const removeDuplicate = [...new Set(arr)];
console.log(removeDuplicate);


const word = 'Muskanaksum'
const letter = word.split('')

function stringPalindrome() {
    for (let i = 0, j = letter.length - 1; i < j; i++, j--) {
        if (letter[i] !== letter[j]) {
            console.log("Is not a palindrome string")
            return false;
        }
    }
    console.log('Is a palindrome string')
    return true;
}

console.log(stringPalindrome());


const words = "Muskan"

function stringReverse(){
    let letter = words.split('')
    for(let i=0, j=letter.length-1; i<j; i++, j--){
        let temp = letter[i];
        letter[i] = letter[j];
        letter[j] = temp;
    }
    return letter.join('');
}

console.log(stringReverse());

const arr1 = [1,1,2,3,1,1,1,4,6,7,8,9]


function maxCountConsecutiveOnes(){
    let count = 0, max = 0;
    for(let num of arr1){
        if(num === 1){
            count++;
            max = Math.max(max, count);
        }else {
            count = 0;
        }

    }
    return max  
}

console.log(maxCountConsecutiveOnes())

function factorial(num){
    if(num===1 || num===0){
        return 1;
    }
    return num * factorial(num-1)
}

console.log(factorial(9));

const arr2 = [1,4,6,9];
const arr3 = [10,13,23,26];

function mergeAndSortArrays(){
    return [...arr2, ...arr3].sort((a,b) => (a-b))
}
console.log(mergeAndSortArrays())

const str1 = "muskan";
const str2 = 'nuksam'
function anagram(str3, str4){
    return str3.split("").sort().join("") === str4.split("").sort().join("")
}

console.log(anagram(str1, str2))

const arr4 = [1,9,5,8,20,35,4,7,2,60,33]

function maxNumber(num){
    let max = 0
    for(let i = 0; i<=num.length-1; i++){
        if(num[i] > max){
            max = num[i]
        }
    }
    return max;
}

console.log(maxNumber(arr4))

const arr5 = [1,5,8,7,22,25, 26, 38, 97]

const even = arr5.filter((ele) => ele%2===0)

console.log(even);

function isPrime(num){
    if(num<2){
        return false;
    }
    if(num%2===0){
        return false;
    }
    return true;  
}
console.log(isPrime(13));

const arr6 = [[1,2],[13, 45, 3],[3333,3339, 79, 99],[709, 32, 4], [0,6,8]]
let max = 0
function maxElementInNestedArray(){
    return max = Math.max(...arr6.flat(Infinity))
}
console.log(maxElementInNestedArray())

function fibonacci(num){
    if(num===0 || num===1){
        return num;
    }
    return fibonacci(num-2) + fibonacci(num-1)
}

console.log(fibonacci(6))


//Fibonacci sequence:

function fibSequence(n){
    let seq = [0, 1]
    for(let i = 2; i<n; i++){
        seq.push(seq[i-1] + seq[i-2])
    }
    return seq
}
console.log(fibSequence(7))

const str4 = "heheeeeeeeehaahaahaaaaa"
const hash = {}

function charCount(){
    for(let i = 0; i<str4.length; i++){
        if(hash[str4[i]]){
            hash[str4[i]]++
        }else {
            hash[str4[i]] = 1
        }
    }
    return hash;
}

let count = 0;
for(let key in hash){
    if(hash[key]){
        count++
    } 
    count = 0;
}

console.log(charCount());

const arr7 = [3,8,1,7,2,9,4,5,6]

function ascendingOrder(num){
    for(let i=0; i<num.length; i++){
        for(let j = i+1; j<num.length; j++){
            if(num[i] > num[j]){
                let temp = num[i]
                num[i] = num[j]
                num[j] = temp;
            }
        }
       
    }
    return num;
}

console.log(ascendingOrder(arr7));

const arr8 = [3,8,1,7,2,9,4,5,6]

function descendingOrder(num){
    for(let i=0; i<num.length; i++){
        for(let j = i+1; j<num.length; j++){
            if(num[i] < num[j]){
                let temp = num[i]
                num[i] = num[j]
                num[j] = temp;
            }
        }
       
    }
    return num;
}

console.log(descendingOrder(arr8));

const sentence = "Hello World"
const word1 = sentence.split(' ')

function reverseWordsInString(word){
    for(let i = 0; i<word.length-1; i++){
        for(let j = word.length-1; j>i; j--){
            let temp = word[i]
            word[i] = word[j]
            word[j] = temp;
        }
    }
    return word;
}

console.log(reverseWordsInString(word1))