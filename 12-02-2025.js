// const nums = [3,3];
// const target = 6;

// var twoSum = function(nums, target) {
//     for(let i = 0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j];
//             }
//         }

//     }
// };

// const output = twoSum(nums,target)
// console.log(output)

// const prices = [7,1,5,3,6,4]

// var maxProfit = function(prices) {
//     let minPrice = Infinity
//     let maxPrice = 0

//     for(let price of prices){
//         minPrice = Math.min(minPrice, price);
//         maxPrice = Math.max(maxPrice, price - minPrice);
//     }
//     return maxPrice
// };  

// console.log(maxProfit(prices))

// const num = [1,3,4,2,2]

// var findDuplicate = function(nums) {
//     return nums.filter((num, index, arr) => arr.indexOf(num) !== index)[0];
// }
// console.log(findDuplicate(num))

// const nums = [5,4,-1,7,8]

// var maxSubArray = function (nums) {
//     let maxSum = nums[0]
//     let curSum = nums[0]
//     for (let i = 0; i < nums.length-1; i++) {
//         curSum = Math.max(nums[i], curSum + nums[i])
//         maxSum = Math.max(maxSum, curSum)
//     }
//     return maxSum;
// };

// const output = maxSubArray(nums)
// console.log(output)

// const s = "anagram";
// const t = "nagaram";

// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };
// console.log(isAnagram(s, t))

// const m = "A man, a plan, a canal: Panama"

// var isPalindrome = function(s) {
//     const u = s.toLowerCase().replace(/[^a-z0-9]/g, '')
//     for(let i = 0, j=u.length-1; i<j; i++, j--){
//         if(u[i]!==u[j]){
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isPalindrome(m))

// const strs = ["flower","flow","flight"]
// var longestCommonPrefix = function(strs) {
//     if(strs.length===0){
//         return false
//     }
//     let prefixes = strs.map(word => word.slice(0, 2));
//     return prefixes.every(prefix => prefix === prefixes[0]);
// };

// const output = longestCommonPrefix(strs)
// console.log(output)

const nums = [3,0,1]
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    console.log(actualSum)
    return expectedSum - actualSum;
};
const output = missingNumber(nums)
console.log(output)