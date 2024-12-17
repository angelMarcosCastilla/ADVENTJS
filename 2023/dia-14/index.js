function maxGifts(houses) {
  const { length } = houses;
  if (length === 0) return 0;
  if (length === 1) return houses[0];
  if (length === 2) return Math.max(houses[0], houses[1]);

  const arr = [];
  arr[0] = houses[0];
  arr[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < length; i++) {
    arr[i] = Math.max(arr[i - 1], arr[i - 2] + houses[i]);
    console.log(arr);
  }

  return arr[length - 1];
}
