function decode(message) {   
  const stack = [];
  let result = '';

  for (let char of message) {
    if (char === '(') {
      stack.push(result);
      result = '';
    } else if (char === ')') {
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      result += char;
    }
  }

  return result;
}