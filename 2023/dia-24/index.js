function getStaircasePaths(steps, maxJump) {
  const saltosPosibles = [];

  function backtrack(currentSequence, remainingSteps) {
    console.log(currentSequence, remainingSteps)
    if (remainingSteps === 0) {
      saltosPosibles.push([...currentSequence]);
      return;
    }

    for (let salto = 1; salto <= maxJump; salto++) {
      if (remainingSteps - salto >= 0) {
        currentSequence.push(salto);
        backtrack(currentSequence, remainingSteps - salto);
        currentSequence.pop(); 
      } 
    } 
  }

  backtrack([], steps);

  return saltosPosibles;
}

console.log(getStaircasePaths(3, 3)); // [[1, 1]]
//getStaircasePaths(3, 3) // [[1, 1, 1], [1, 2], [2, 1], [3]]
//getStaircasePaths(5, 1) // [[1, 1, 1, 1, 1]]
//getStaircasePaths(5, 2)
