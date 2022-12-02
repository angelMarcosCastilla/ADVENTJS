function countHours(year, holidays) {
  const cantidadDias = holidays.reduce((acc, day) => {
    const date = new Date(`${day}/${year}`).getDay();    
    acc+= (date>=1 && date<6) ? 2 : 0
    return acc
  },0)
    
  return cantidadDias
}
