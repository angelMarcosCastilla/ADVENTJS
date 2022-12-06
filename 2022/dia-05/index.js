function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let totalGifs = 0;
  let cities = 0;

  giftsCities.sort((a, b) => b - a);

  for (let cityGifts of giftsCities) {
    if (cities >= maxCities) break;
    if (totalGifs + cityGifts <= maxGifts) {
      totalGifs += cityGifts;
      cities += 1;
    } else if (giftsCities[cities - 1] < maxGifts) {
      totalGifs += maxGifts - giftsCities[cities - 1];
      break;
    }
  }

  return totalGifs;

}




console.log(getMaxGifts([50], 15, 1))// 20
getMaxGifts([50], 15, 1) // 0
//getMaxGifts([50], 100, 1) // 50
//getMaxGifts([50, 70], 100, 1) // 70
//getMaxGifts([50, 70, 30], 100, 2) // 100
//getMaxGifts([50, 70, 30], 100, 3) // 100
//getMaxGifts([50, 70, 30], 100, 4) // 100

