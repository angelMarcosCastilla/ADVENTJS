/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const result = [];
  const adjacents = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[0].length; j++) {
      let bomb = 0;

      for (let k = 0; k < adjacents.length; k++) {
        const [x, y] = adjacents[k];
        const dx = x + i;
        const dy = y + j;
        const adjacent = grid[dx]?.[dy];
        if (adjacent) {
          bomb++;
        }
      }
      row.push(bomb);
    }
    result.push(row);
    row = [];
  }

  return result;
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
