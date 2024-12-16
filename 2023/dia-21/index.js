function findBalancedSegment(message) {
  const map = new Map();
  map.set(0, -1);

  let balance = 0;
  let maxLength = 0;
  let segments = [];

  for (let i = 0; i < message.length; i++) {
    balance += message[i] === 1 ? 1 : -1;
    if (map.has(balance)) {
      const startIdx = map.get(balance);
      const length = i - startIdx;

      if (length > maxLength) {
        maxLength = length;
        segments = [startIdx + 1, i];
      }
    } else {
      map.set(balance, i);
    }
  }

  return segments;
}

