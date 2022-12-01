function wrapping(gifts) {
  return gifts.map(el => {
    const left = "*".repeat(el.length + 2)
    const rigth = "*".repeat(el.length + 2)
    return `${left}\n*${el}*\n${rigth}`
  })
}