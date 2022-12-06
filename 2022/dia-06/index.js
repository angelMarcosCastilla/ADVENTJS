function createCube(size) {
  const lefTop = "/\\";
  const rigthTop = "_\\".repeat(size);
  const leftBottom = "\\/";
  const rigthBottom = "_/".repeat(size);
  let top ="";
  let bottom = ""
  
  for(let i = 1; i <= size; i++) {
    top+=`${" ".repeat(size-i)}${lefTop.repeat(i)}${rigthTop}\n`;
    bottom+=`${" ".repeat(( i + size - 1) - size)}${leftBottom.repeat((size + 1)-i)}${rigthBottom}`
    bottom+= i < size ?  "\n" : "";
    
  }
  
  return `${top}${bottom}`
}

console.log(createCube(3))

// output:
/*
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/*/