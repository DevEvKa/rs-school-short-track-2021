/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const arrRes = [];
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    if (result[a] !== undefined) {
      result[a]++;
    } else {
      result[a] = 1;
    }
  }
  Object.entries(result).forEach(([key, value]) => {
    arrRes.push(key);
    arrRes.push(value);
  });
  return arrRes.join('');
}

module.exports = encodeLine;
