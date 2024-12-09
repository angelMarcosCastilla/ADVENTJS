/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let columnIndex = 0;
  let rowIndex = 0;
  let trainPosition = 0;

  const information = {
    "·": "none",
    "*": "eat",
    o: "crash",
  };
  const moves = {
    U: { row: -1, col: 0 },
    D: { row: 1, col: 0 },
    L: { row: 0, col: -1 },
    R: { row: 0, col: 1 },
  };

  for (let i = 0; i < board.length; i++) {
    trainPosition = board[i].indexOf("@");
    columnIndex = trainPosition;
    rowIndex = i;
    if (trainPosition !== -1) break;
  }

  rowIndex += moves[mov].row;
  columnIndex += moves[mov].col;

  const character = board[rowIndex]?.[columnIndex];
  return information[character] || "crash";
}
