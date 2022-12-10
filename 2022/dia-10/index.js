function checkJump(heights) {
  if (heights[0] >= heights[1]) {
    return false;
  }

  const numMayor = heights.findIndex((num, index) => {
    return num > heights[index + 1];
  });

  const arrAsc = heights.slice(0, numMayor);
  const arrDesc = heights.slice(numMayor, -1);

  const isAsendent = arrAsc.every((num, index) => {
    return num <= heights[index + 1];
  });

  const isDesendent = arrDesc.length > 0 && arrDesc.every((num, index) => {
    return num >= heights[numMayor + index + 1];
  })


  return [isAsendent, isDesendent].every(Boolean);
}


// version 2.0 
function checkJump(heights) {
  if (heights[0] >= heights[1]) {
    return false;
  }

  const numMayor = heights.findIndex((num, index) => {
    return num > heights[index + 1];
  });

  const arrDesc = heights.slice(numMayor, -1);
  const isDesendent = arrDesc.length > 0 && arrDesc.every((num, index) => {
    return num >= heights[numMayor + index + 1];
  })
  return isDesendent;

}