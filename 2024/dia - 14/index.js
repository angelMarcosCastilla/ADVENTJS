/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  let count = 0;
  let sortStables = stables.sort((a, b) => a - b);
  let sortReindeer = reindeer.sort((a, b) => a - b);

  for (let i = 0; i < reindeer.length; i++) {
    count += Math.abs(sortReindeer[i] - sortStables[i]);

  }
  return count;
}
