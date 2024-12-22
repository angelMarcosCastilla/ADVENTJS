function generateGiftSets(gifts) {
  const result = [];

  function backtrack(start, path) {
    if (path.length > 0) {
      result.push([...path]);
    }

    for (let i = start; i < gifts.length; i++) {
      path.push(gifts[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  result.sort((a, b) => a.length - b.length);
  return result;
}

generateGiftSets(["apple", "banana", "cherry", "date"]);
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

//generateGiftSets(['ball'])
// [
//   ['ball']
// ]

//generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
