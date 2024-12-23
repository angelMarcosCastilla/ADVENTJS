/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const largestNum = Math.max(...nums);
  let result = [];
  for (let i = 1; i <= largestNum; i++) {
    if (!nums.includes(i)) result.push(i);
  }

  return result;
}

