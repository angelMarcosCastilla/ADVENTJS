function calculateTime(deliveries) {
  let finishTime = 7 * 3600;
  let totalTime = 0;
  deliveries.forEach((time) => {
    const [hour, minutes, seconds] = time.split(":").map(Number);
    totalTime += hour * 3600 + minutes * 60 + seconds;
  });

  let timeLeft = finishTime - totalTime;
  const sing = timeLeft > 0 ? "-" : "";

  timeLeft = Math.abs(timeLeft);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return `${sing}${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

