/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  let strUpper = str.toUpperCase();

  if ( strUpper.includes('1XBET') || strUpper.includes('XXX') ) {
    return true;
  }

  return false;
}
