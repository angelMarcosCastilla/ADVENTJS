/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  const registers = {};
  let position = 0;

  while (position < instructions.length) {
    const [operation, x, y] = instructions[position].split(" ");
    if (operation === "MOV") {
      const isregister = registers[x] !== undefined;
      if (isregister) {
        registers[y] = registers[x];
      } else {
        registers[y] = Number(x);
      }
    }

    if (operation === "INC") {
      registers[x] ??= 0;
      registers[x]++;
    }

    if (operation === "DEC") {
      registers[x] ??= 0;
      registers[x]--;
    }

    if (operation === "JMP") {
      registers[x] ??= 0;
      if (registers[x] == 0) {
        position = Number(y);
        continue;
      }
    }

    position++;
  }

  return registers.A;
}
