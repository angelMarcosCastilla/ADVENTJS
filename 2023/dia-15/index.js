function autonomousDrive(store, movements) {
  const moves = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  };
  const result = store.map((row) => row.split(""));
  let positionRobot = [0, 0];

  store.forEach((text, i) => {
    const position = text.indexOf("!");
    if (position > -1) {
      positionRobot = [i, position];
      return;
    }
  });

  movements.forEach((movement) => {
    const [x, y] = moves[movement];

    const newX = positionRobot[0] + x;
    const newY = positionRobot[1] + y;
    const cell = result?.[newX]?.[newY];
    if (cell === ".") {
      result[positionRobot[0]][positionRobot[1]] = ".";
      positionRobot = [newX, newY];
      result[newX][newY] = "!";
    }
  });

  return result.map((row) => row.join(""));
}
