function calculatePrice(ornaments) {
  const values = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let total = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const currentPrice = values[ornaments[i]];
    const nextPrice = values[ornaments[i + 1]];
    if (!currentPrice) return undefined;

    if (currentPrice < nextPrice) {
      total -= currentPrice;
    } else {
      total += currentPrice;
    }
  }

  return total;
}
