function distributeGifts(packOfGifts, reindeers) {
  const reindeersLength = reindeers.reduce((acc, el) => {
    return acc += (el.length * 2)
  }, 0)
  const giftsLength = packOfGifts.reduce((acc, el) => {
    return acc += el.length
  }, 0)
  return Math.floor(reindeersLength / giftsLength);
}