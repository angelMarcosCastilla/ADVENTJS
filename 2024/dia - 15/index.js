/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
  let table = "";
  let header = "";
  const headers = Object.keys(data[0]);

  const columnWidths = headers.map((header) => {
    return Math.max(
      ...data.map((row) => String(row[header]).length),
      header.length
    );
  });

  const separator =
    "+" + columnWidths.map((width) => "-".repeat(width + 2)).join("+") + "+";

  header += separator + "\n";
  header +=
    "| " +
    headers
      .map((header, i) => {
        const capitalizedHeader =
          header.charAt(0).toUpperCase() + header.slice(1);
        return capitalizedHeader.padEnd(columnWidths[i]);
      })
      .join(" | ") +
    " |\n";

  header += separator;

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    table +=
      "| " +
      headers
        .map((header, index) => String(row[header]).padEnd(columnWidths[index]))
        .join(" | ") +
      " |\n";
  }

  table += separator;

  return `${header}\n${table}`;
}

console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
