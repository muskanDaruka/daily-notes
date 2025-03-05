// const nums = [0,0,1,1,1,2,2,3,3,4]
// var removeDuplicates = function(nums) {
//     const uniqueNums = [...new Set(nums)]
//     return uniqueNums.length;
// };
// console.log(removeDuplicates(nums))

// const num = [2,7,11,15], target = 9

// var twoSum = function(num, target) {
//     for(let i = 0; i<num.length-1; i++){
//         for(let j = i+1; j<num.length; j--){
//             if(num[i] + num[j] === target){
//                 return [i,j];
//             }
//         }
//     }
// };

// console.log(twoSum(num,target))

// const nums1 = [0,1,2,2,3,0,4,2], val = 2
// let result = []
// var removeElement = function(nums, val) {
//     for(let i = 0; i<nums.length-1; i++){
//         if(nums[i] !== val){
//             result.push(nums[i])
//         }
//     }
//     console.log(result)
//     return result.length;
// };
// console.log(removeElement(nums1, val))

// const nums2 = [1,3,5,6], target1 = 7

// var searchInsert = function(nums, target) {
//     let left = 0;
//     let right = nums.length-1;


//     while(left<=right){
//         let mid = Math.floor((left+right)/2) 
//         if(target===nums[mid]){
//             return mid
//         } else if(nums[mid]<target){
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return left;
// };
// console.log(searchInsert(nums2, target1))

// const nums = [0, 1, 0, 3, 12]
// var moveZeroes = function (nums) {
//     let i = 0;
//     for (j = 0; j < nums.length; j++) {
//         if (nums[j] !== 0) {
//             [nums[i], nums[j]] = [nums[j], nums[i]]
//             i++
//         }
//     }
//     return nums
// };
// console.log(moveZeroes(nums))


// const nums3 = [1, 2, 3, 1]
// var containsDuplicate = function (nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] !== nums[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(containsDuplicate(nums3))


// const nums4 = [1, 2, 2, 3, 4, 3, 4]
// var singleNumber = function (nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] !== nums[i + 1]) {
//             return nums[i];
//         }
//     }
//     return -1
// };

// console.log(singleNumber(nums4))


// const nums5 = [4, 3, 2, 7, 8, 2, 3, 1]

// var findDisappearedNumbers = function(nums) {
//     let n = nums.length;
//     let numSet = new Set(nums);

//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (!numSet.has(i)) {
//             result.push(i); 
//         }
//     }
//     return result;
// };
// console.log(findDisappearedNumbers(nums5))


// const arr = [1,2,3,3]
// var uniqueOccurrences = function(arr) {
//     for(let i = 0; i<arr.length-1; i++){
        
//     } 
// };
// console.log(uniqueOccurrences(arr))

// const mat = [[1,2,3],
//              [4,5,6],
//              [7,8,9]]
// var diagonalSum = function(mat) {
//     let result = 0
//     for(let i = 0; i<mat.length; i++){
//         for(let j = 0; j<mat.length; j++){
//             if(i===j || i+j===2){
//                 result = result + mat[i][j]  
//             }
//         }
//     }
//     return result
// };
// console.log(diagonalSum(mat))


const nums = [4,1,2,3]
var sortEvenOdd = function(nums) {
    for(let i = 0; i<nums.length-1; i+=2){
        if(i%2 === 0) {
            nums[i].sort((a,b) => (a-b))
        }  
    }
    for(let j = 1; j<nums.length; j+=2){
        if(j%2!==0){
            nums[j].sort((a,b) => (a-b))
        }  
    }
    return nums
};
console.log(sortEvenOdd(nums))