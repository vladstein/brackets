module.exports = function check(str, bracketsConfig) {
    let start = 1;

  while (start === 1) {

    let newStr = str;

    bracketsConfig.map(element => str = str.replace(element[0] + element[1], ''));

    if (newStr === str) {
      start = 0;
    }

  }
  return (str.length === 0) ? true : false
}
