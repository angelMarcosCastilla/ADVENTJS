function distributeGifts(weights) {
  let output = [];
  const neighbors = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const columns = weights[0].length;

  for (let i = 0; i < weights.length; i++) {
    
    let row = [];
    for (let j = 0; j < columns; j++) {
      let total = weights[i][j] ?? 0;
      let divisor = total === 0 ? 0 : 1;
      neighbors.forEach(([x, y]) => {
        const vx = x + i;
        const vy = y + j;
        const neighbor = weights[vx]?.[vy];
        if (neighbor) {
          total += neighbor;
          divisor++;
        }
      });
      row.push(Math.round(total / divisor));
    }

    output.push(row);
    row = [];
  }

  return output;
}
