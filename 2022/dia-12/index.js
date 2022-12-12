function selectSleigh(distance, sleighs) {
  const trineo = sleighs.reverse()
    .find(({ consumption }) => consumption * distance <= 20)
  return trineo ? trineo.name : null


}


const distance = 30
const sleighs = [
  { name: "Gorusuke", consumption: 0.3 },
  { name: "Madeval", consumption: 0.5 },
  { name: "Lolivier", consumption: 0.7 },
  { name: "Hyuuh", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)) // => "Madeval"

console.log(selectSleigh(10, [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
]))

console.log(selectSleigh(10, [
  { name: 'Pedrosillano', consumption: 6 },
  { name: 'SamarJaffal', consumption: 7 },
  { name: 'marcospage', consumption: 10 }
]))