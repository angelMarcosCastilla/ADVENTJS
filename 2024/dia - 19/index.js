/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const boxes = [10, 5, 2, 1];

  let draw = [];

  for (const box of boxes) {
    if (weight >= box) {
      let boxDraw = [];
      const resultBox = Math.floor(weight / box);
      weight %= box;
      let baseBox = boxRepresentations[box].at(-1);
      const topBox = boxRepresentations[box][0];
      let middleBox = box >= 5 ? boxRepresentations[box][1] : "";
      boxDraw.push(topBox);
      for (let i = 0; i < resultBox; i++) {
        if (middleBox) {
          boxDraw.push(middleBox);
        }
        boxDraw.push(baseBox);
      }

      draw.unshift(boxDraw);
      const prevDraw = draw[1];
      let current = draw[0];
      if (prevDraw) {
        draw[1] = prevDraw.slice(1);
        const length = prevDraw[0].length - current[0].length - 1;
        current[current.length - 1] += "_".repeat(length);
      }
    }
  }

  return draw.map((box) => box.join("\n")).join("\n");
}
