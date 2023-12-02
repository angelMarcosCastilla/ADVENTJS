function manufacture(gifts, materials) {
  const listGifts =  gifts.filter(gift =>{
    return [...gift].every(letter=> materials.includes(letter))
  })
}