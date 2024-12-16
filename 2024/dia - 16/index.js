/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const snow = []

  for(let i = 0; i < s.length; i++) {

    if(s[i] === snow.at(-1)) {
      snow.pop()
    }else{
      snow.push(s[i])
    }

  }
  return snow.join("");
}


console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"