/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {

  let sumSalar = 0;

  for (let key in salaries) {
    if ( typeof salaries[key] === 'number') {
      sumSalar = sumSalar + salaries[key];
    }
  }

  return sumSalar;
}
