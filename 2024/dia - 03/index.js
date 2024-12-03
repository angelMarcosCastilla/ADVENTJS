function organizeInventory(inventory) {
  let result = {}
  inventory.forEach(item => {
    result[item.category] ??= {}
    result[item.category][item.name] ??= 0
    result[item.category][item.name] += item.quantity
  })
  return result
}