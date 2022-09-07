module.exports.isNaturalNum = function (n) {
  return n >= 0 && Math.floor(n) === +n;
};

module.exports.lowestCommonMultiple = function (arr) {
  const gcd = (a, b) => (a ? gcd(b % a, a) : b);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return arr.reduce(lcm);
};

module.exports.formatResponsestring = function (arr, lcm) {
  allButLast = arr.slice(0, -1);
  last = arr[arr.length - 1];

  return `The LCM of ${allButLast} and ${last} is ${lcm}`;
};
