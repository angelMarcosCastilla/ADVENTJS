function createXmasTree(height, ornament) {
  const widthTree = height * 2 - 1;
  const partTruk = (widthTree - 1) / 2;
  const trunk = "_".repeat(partTruk) + "#" + "_".repeat(partTruk);

  let stringTree = "";

  for (let i = 1; i <= height; i++) {
    const countCarater = i * 2 - 1;
    const part = (widthTree - countCarater) / 2;
    stringTree += "_".repeat(part);
    stringTree += ornament.repeat(countCarater);
    stringTree += "_".repeat(part);

    stringTree += "\n";
  }

  stringTree += trunk;
  stringTree += "\n";
  stringTree += trunk;
  return stringTree;
}
