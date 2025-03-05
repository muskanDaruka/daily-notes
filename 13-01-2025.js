function printPattern() {
    for (let i = 1; i <= 5; i++) {
        let str = ' '
        console.log(str.repeat(i))
    }  
}

function printPattern() {
    const n = 5; 
    for (let i = 1; i <= n; i++) {
        let row = ''; 
        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i || i === n) {
                row = row +  '* ';
            } else {
                row = row + '  '; 
            }
        }
        console.log(row.trim());
    }
}

printPattern();


/* 
    virtual dom
    useState
    useEffect
    jsx
    props
    axios
    redux
    pattern 
    seo friendly
    react adv
    react - single page application
*/


function sum(a, b) {
    return a + b;
}
const num1 = 10;
const num2 = 20;
const result = sum(num1, num2);
console.log("The sum of", num1, "and", num2, "is", result);

const str = "Hello World"


function reverseString(words) {
    words = str.split('')
    for (let i = 0, j = words.length - 1; (i < j) / 2; i++, j--) {
        let temp = words[i]
        words[i] = words[j]
        words[j] = temp;
    }
    return words.join('');
}

const output = reverseString(str)
console.log(output)


const pali = "MADAM"

function isPalindrome(str) {
    str = pali.split('')
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            console.log(str, "Is not a Palindrome string")
            return false;
        }
    }
    console.log(str, "Is Palindrome string")
    return true;
}

const answer = isPalindrome(pali)
console.log(answer)



const nums = [75, 63, 99, 24, 10, 55, 33, 89, 88, 12]

function findLargestNumber(arr) {
    let max = 0;
    let min = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return [max, min];
}

const largest = findLargestNumber(nums)
console.log(largest);


function factorial(num) {
    if (num === 1 || num ===0) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}


const fact = factorial(5);
console.log(fact)

function fibonacci(num){
    if(num === 0 || num === 1){
        return num;
    } else {
        return num + fibonacci(num-1)
    }
}

const fib = fibonacci(8)
console.log(fib)

