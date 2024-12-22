function checkIsValidCopy(original, copy) {
  const characters = [" ", "#", "+", ".", ":"];

  if(original.length !== copy.length) {
    return false;
  }

  for (let i=0; i < original.length; i++) {
    const originalChar = original[i]?.toLowerCase();
    const copyChar = copy[i]?.toLowerCase();

    if(copyChar == null) return false;
    if (copyChar !== originalChar && !characters.includes(copyChar) && (originalChar=== " " && characters != " ") ) {
      return false;
    }
  }

  return true;
}

console.log(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS'));
