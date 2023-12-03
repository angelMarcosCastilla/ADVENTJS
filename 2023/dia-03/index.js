function findNaughtyStep(original, modified) {
  let [maxWord, minWord] = original.length > modified.length
   ? [original, modified] 
   : [modified, original];

return [...maxWord]
.find((v,i) => v != minWord[i]) ?? '';
}