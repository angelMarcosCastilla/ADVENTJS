function getCompleted(part, total) {
  const arrPartSeconds= part.split(':').reverse()
  const arrTotalSeconds = total.split(':').reverse()

  const {partSecondsTotal, totalSecondsTotal } = [60,3600].reduce((acc, el, index) =>{
    acc.partSecondsTotal += arrPartSeconds[index+1]*el
    acc.totalSecondsTotal += arrTotalSeconds[index+1]*el
    return acc
  }, {
    partSecondsTotal: Number(arrPartSeconds[0]),
    totalSecondsTotal: Number(arrTotalSeconds[0])
  })
  let a = partSecondsTotal, b = totalSecondsTotal, resto = 0
  while (b != 0) {
    resto = b;
    b = a % b;
    a = resto;
  }

  return partSecondsTotal/a + '/' + totalSecondsTotal/a 
}
  

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('03:30:30', '01:10:10')) // '2/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5