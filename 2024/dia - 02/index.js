function createFrame(names) {
  const nameLarge = Math.max(...names.map(el=>el.length))+ 4
  let frame = "*".repeat(nameLarge)
  names.forEach(name =>{
    const space = " ".repeat((nameLarge - name.length) - 4)
    frame +=`\n* ${name}${space} *`
  })
  frame += "\n" + "*".repeat(nameLarge)
  return frame
}