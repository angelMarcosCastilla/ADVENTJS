function checkJump(heights) {
  const numMayor = heights.indexOf(Math.max(...heights));
  const arrAsc = heights.slice(0, numMayor );
  const arrDesc = heights.slice(numMayor + 1);
  const isDesendent = arrDesc.length > 0 && arrDesc.every((num, index) => {
    return num <= heights[numMayor + index];
  })
  const isAscendent = arrAsc.length > 0 && arrAsc.every((num, index) => {
    return num <= heights[index + 1];
  });
  return isDesendent && isAscendent
}

console.log(checkJump([1, 2, 1])) //true
console.log(checkJump([1, 3, 8, 5, 2])) // true
console.log(checkJump([1, 7, 3, 5])) // false
console.log(checkJump([2,2,2,2,2])) // false
console.log(checkJump([1, 2, 2, 2, 1])) // }rtue
console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])) // true
console.log(checkJump([ 1,3, 2, 5, 4, 3, 2, 1])) // false
console.log(checkJump([ 1,2,3,9,5,6,8])) // false