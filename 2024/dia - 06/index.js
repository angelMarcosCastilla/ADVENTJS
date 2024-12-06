function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const currentRow = box[i];
    const starPosition = currentRow.indexOf("*");
    if (starPosition > 0 && starPosition < currentRow.length - 1) {
      return true;
    }
  }
  return false;
}

