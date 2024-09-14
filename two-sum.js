/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexes = [];
    const pairs = new Map();

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             indexes = [i, j];
    //             break;
    //         }
    //     }
    // }

    // return indexes;

    // for (let i = 0; i < nums.length; i++) {
    //     const complement = target - nums[i];
    //     console.log(complement, pairs)
    //     if (pairs.has(complement)) {
    //         return [pairs.get(complement), i];
    //     }

    //     pairs.set(nums[i], i);
    // }
    
    // return [];
};