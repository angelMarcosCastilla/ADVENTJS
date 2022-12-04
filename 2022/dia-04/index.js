function fitsInOneBox(boxes) {
  let ladoMasGrande = 0;
  let index = 0;
  boxes.forEach((box, el) => {
    if (ladoMasGrande < box.l) {
      ladoMasGrande = box.l
      index = el
    }
  })
  const boxLarge = boxes[index]
  let isCorrect = false
  for (let i = 0; i < boxes.length; i++) {
    if (i !== index) {
      isCorrect = boxes[i].l < boxLarge.l && boxes[i].w <= boxLarge.w && boxes[i].h <= boxLarge.h
    }
  }
  return isCorrect
}

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true

const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes1) // false

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes2) // true