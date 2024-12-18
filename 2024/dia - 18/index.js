/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const lineas = agenda.split("\n");
  const numeroPatron = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;
  const nombrePatron = /<([^>]+)>/;

  let result = null;

  for (const linea of lineas) {
    const name = linea.match(nombrePatron)?.[1];
    const numero = linea.match(numeroPatron)?.[0];

    const address = linea
      .replace(numeroPatron, "")
      .replaceAll(`<${name}>`, "")
      .trim();

      if(numero.includes(phone)){
        if(result) return null;
        result = { name, address };
      }

  }

  return result;
}


