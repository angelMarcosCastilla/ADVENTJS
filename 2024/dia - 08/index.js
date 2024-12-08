function drawRace(indices, length) {
  let lanes = [];
  for (let i = 0; i < indices.length; i++) {
    let lane = "~".repeat(length).split("");
    const position = indices[i];
    const rigthSide = " ".repeat(indices.length - i - 1);

    if (position > 0) lane[position] = "r";

    if (position < 0) lane[length + position] = "r";

    lanes.push(`${rigthSide}${lane.join("")} /${i + 1}`);
  }

  return lanes.join("\n");
}
