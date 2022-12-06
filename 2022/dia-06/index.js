function createCube(size) {
  const lefTop = "/\\";
  const rigthTop = "_\\".repeat(size);
  const leftBottom = "\\/";
  const rigthBottom = "_/".repeat(size);
  let top = [];
  let bottom = []

  for (let i = 1; i <= size; i++) {
    top.push(`${" ".repeat(size - i)}${lefTop.repeat(i)}${rigthTop}`);
    bottom.push(`${" ".repeat((i + size - 1) - size)}${leftBottom.repeat((size + 1) - i)}${rigthBottom}`)

  }

  return [...top, ...bottom].join(`\n`)
}



// output:
/*
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/*/
