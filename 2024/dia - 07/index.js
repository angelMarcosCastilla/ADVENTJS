/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let text = packages;
  while (text.includes("(")) {
    const openIndex = text.lastIndexOf("(");
    const closeIndex = text.indexOf(")", openIndex);
    const reverseText = text
      .slice(openIndex + 1, closeIndex)
      .split("")
      .reverse()
      .join("");

    text = text.slice(0, openIndex) + reverseText + text.slice(closeIndex + 1);
  }
  return text;
}
