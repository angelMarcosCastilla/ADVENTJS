function travelDistance(map) {
  const matrix = map.split('\n')
  const children = {}
  let santPos = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const char = matrix[i][j]
      if (char === 'S') {
        santPos = [i, j]
      }
      if(char <= 9 && char >= 1) {
        children[char] = [i,j]
      }
    }
  }

  let totalDistance = 0;
    for (let child in children) {
        const current = children[child]
        console.log(current, santPos)
        totalDistance += Math.abs(santPos[0] - current[0]) + Math.abs(santPos[1] - current[1])
        santPos = current
    }

  return totalDistance
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2