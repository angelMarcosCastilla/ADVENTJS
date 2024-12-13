/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let position = [0, 0];
  let executeMoves = new Set("");
  let lastMove = "";
  let i = 0;

  const mapPosition = {
    R: 0,
    L: 0,
    U: 1,
    D: 1,
  };

  const invertMoves = {
    L: "R",
    R: "L",
    U: "D",
    D: "U",
  };

  const actions = {
    R: 1,
    L: -1,
    U: 1,
    D: -1,
  };

  while (i < moves.length) {
    const currentLetter = moves[i];

    if (currentLetter === "*") {
      const nextLetter = moves[i + 1];
      lastMove = nextLetter;
      executeMoves.add(nextLetter);
      position[mapPosition[nextLetter]] += actions[nextLetter] * 2;
      i += 2;
      continue;
    }

    if (currentLetter === "!") {
      const nextLetter = invertMoves[moves[i + 1]];
      position[mapPosition[nextLetter]] += actions[nextLetter];
      executeMoves.add(nextLetter);
      lastMove = nextLetter;
      i += 2;
      continue;
    }

    if (currentLetter === "?") {
      const nextMove = moves[i + 1];

      if (executeMoves.has(nextMove)) {
        i += 2;
        continue;
      }

      position[mapPosition[nextMove]] += actions[nextMove];
      lastMove = nextMove;
      executeMoves.add(nextMove);
      i += 2;
      continue;
    }

    position[mapPosition[currentLetter]] += actions[currentLetter];
    lastMove = currentLetter;
    executeMoves.add(currentLetter);
    i++;
  }

  if (position[0] === 0 && position[1] === 0) return true;

  return position;
}
