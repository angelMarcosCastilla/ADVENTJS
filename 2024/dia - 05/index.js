/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  const boots = {};
  let result = [];

  shoes.forEach((item) => {
    const { size, type } = item;
    boots[size] ??= { I: 0, R: 0 };
    boots[size][type] += 1;
  });

  for (let size in boots) {
    const {I, R} = boots[size]
    const pair = Math.min(I, R)
    const arrPair = Array(pair).fill(Number(size));
    result.push(...arrPair);
  }

  return result;
}