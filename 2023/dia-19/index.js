function revealSabotage(store) {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  const rows = store.length;
  const cols = store[0].length;

  const result = store.map((row) => row.slice());

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (store[i][j] === "*") continue;

      let count = 0;

      for (const [x, y] of directions) {
        const dx = i + x;
        const dy = j + y;

        if (
          dx >= 0 &&
          dx < rows &&
          dy >= 0 &&
          dy < cols &&
          store[dx][dy] === "*"
        ) {
          count++;
        }
      }

      result[i][j] = count > 0 ? String(count) : " ";
    }
  }

  return result;
}
const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
