function findFirstRepeated(gifts) {
  const numberView = new Set();

  for (let i = 0; i < gifts.length; i++) {
    const number = gifts[i];

    if (numberView.has(number)) {
      return number;
    } else {
      numberView.add(number);
    }
  }

  return -1;
}