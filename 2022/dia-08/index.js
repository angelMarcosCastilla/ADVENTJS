function checkPart(part) {
  return Array.from({ length: part.length }).some((_, index) => {
    const path = part.slice(0, index) + part.slice(index + 1);
    const pathReverse = path.split("").reverse().join("");
    return path === pathReverse
  });
}


checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false

checkPart("zzzoonzzz")