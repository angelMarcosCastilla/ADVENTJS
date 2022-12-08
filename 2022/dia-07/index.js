function getGiftsToRefill(a1, a2, a3) {
  const noRepeatGifst = [...new Set([...a1, ...a2, ...a3])]
  
  return noRepeatGifst.filter(gift => {
    const sum = a1.includes(gift) + a2.includes(gift) + a3.includes(gift)
    return sum === 1
  })
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
const gifts = getGiftsToRefill(a1, a2, a3)
console.log(gifts)