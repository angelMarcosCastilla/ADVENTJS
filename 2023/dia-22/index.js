function compile(code) {
  let count = 0;
  let i = 0;
  let returnPosition = [];
  while (i < code.length) {
    const letter = code[i];
    if (letter === "+") count++;
    if (letter === "-") count--;
    if (letter === "*") count *= 2;
    if (letter === "/") count /= 2;

    if (letter === "%") {
      returnPosition.push(i);
    }

    if (letter === "<" && returnPosition.length > 0) {
      let position = returnPosition.pop();
      returnPosition = [];
      i = position;
    }

    if (letter === "¿") {
      const closeCondition = code.indexOf("?", i + 1);
      if (count <= 0) i = closeCondition;
    }

    i++;
  }

  return count;
}

console.log(compile("<%+¿++%++<?"));
