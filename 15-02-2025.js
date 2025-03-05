//Armstrong number:

const num = 1634;
function isArmstrongNumber(n) {
    let originalNumber = n
    let numOfDigits = n.toString().length;
    let sum = 0;
    while (n > 0) {
        let remainder = n % 10;
        sum = sum + remainder ** numOfDigits;
        n = Math.floor(n / 10)
    }
    if (sum == originalNumber) {
        return true
    } else {
        return false
    };
}
console.log(isArmstrongNumber(num))

//Missing number 

const nums = [9,6,4,2,3,5,7,0,1]
var missingNumber = function(nums) {
    nums.sort((a,b)=>(a-b))
    for(let i = 0; i<nums.length; i++){
        if(nums[i]!==i){
            return i;
        }
    }
    return nums.length
};
console.log(missingNumber(nums))

let obj = {
    firstName : 'Hello',
    lastName: 'Muskan'
}
console.log(obj.firstName +' '+obj.lastName)