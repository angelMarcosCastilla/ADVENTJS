function getFilesToBackup(lastBackup, changes) {
  const arr = changes.filter(el => el[1] > lastBackup)
    .map(el => el[0])
    .sort((a, b) => a - b)
  return [...new Set(arr)]
}

const lastBackup = 1546300800
const changes = [
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
  [3, 1546301100]
]

console.log(getFilesToBackup(lastBackup, changes) )