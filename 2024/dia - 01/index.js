function prepareGifts(gifts) {
  const sortedGifts = gifts.sort((a, b) => a - b);
  const uniqueGifts = [...new Set(sortedGifts)];
  return uniqueGifts;
}
