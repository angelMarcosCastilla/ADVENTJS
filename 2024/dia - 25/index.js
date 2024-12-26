function execute(code) {
  let text = code.split("");
  let value = 0;
  const actions = {
    "[": () => {
      text = text.slice(text.indexOf("]") - 1);
    },
    "]": () => {
      value = 0;
    },
    "{": () => {
      if (value == 0) text = text.slice(text.indexOf("}"));
    },
  };

  while (text.length) {
    const textChar = text.shift();
    if (textChar == "+") value += 1;
    if (textChar == "-") value -= 1;
    if (textChar == ">") continue;
    actions[textChar]?.();
  }

  return value;
}
