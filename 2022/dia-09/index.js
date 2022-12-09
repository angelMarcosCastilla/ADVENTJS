function countTime(leds) {
  let acc = 0;
  while (leds.some((el) => el === 0)) {
    leds = leds.map((el, index) => {
      if (el === 0 && leds.at(index - 1) === 1) {
        return 1;
      }
      return el;
    });
    acc+=7;
  }
  return acc
}
