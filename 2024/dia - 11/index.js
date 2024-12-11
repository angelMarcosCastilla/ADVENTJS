/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const firstUnderscoreIndex = filename.indexOf("_");
  const lastDotIndex = filename.lastIndexOf(".");

  const fileName = filename.slice(firstUnderscoreIndex + 1, lastDotIndex);

  return fileName;
}
