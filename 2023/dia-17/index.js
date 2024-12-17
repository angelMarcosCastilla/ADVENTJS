function optimizeIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let result = [sortedIntervals[0]];

  for (let i = 0; i < sortedIntervals.length; i++) {
    const currentInterval = sortedIntervals[i];
    const previousInterval = result[result.length - 1];
    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}
