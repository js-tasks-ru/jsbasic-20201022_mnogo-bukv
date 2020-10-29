/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {

  if (str) {
    // попробовать - если в str несколько слов через пробел
    let separator = ' ';
    let arrayStr = str.split(separator);
    let strItog = '';

    for (let arrElement of arrayStr) {
      strItog = strItog + ' ' + arrElement[0].toUpperCase() + arrElement.slice(1);
    }

    return strItog.trim();
  }

  return '';
}
