const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringN = n.toString();
  let maxNumber = 0;

  for (let i = 0; i < stringN.length; i++) {
    const newString = stringN.slice(0, i) + stringN.slice(i + 1);
    const newNum = Number(newString);

    if (newNum > maxNumber) {
      maxNumber = newNum;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
