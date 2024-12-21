/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  const missing = {};
  const extra = {};
  const receivedSet = {};
  const expectedSet = {};

  expected.forEach((gift) => {
    expectedSet[gift] ??= 0;
    expectedSet[gift] += 1;
  });
  received.forEach((gift) => {
    receivedSet[gift] ??= 0;
    receivedSet[gift] += 1;
  });

  for (const gift in expectedSet) {
    const diff = expectedSet[gift] - (receivedSet[gift] || 0);
    if (diff > 0) {
      missing[gift] = diff;
    }
  }

  for (const gift in receivedSet) {
    const diff = receivedSet[gift] - (expectedSet[gift] || 0);
    if (diff > 0) {
      extra[gift] = diff;
    }
  }

  return { missing, extra };
}
