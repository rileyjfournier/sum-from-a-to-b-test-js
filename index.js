function sum(fromN, toN) {
if (fromN === toN) {
  return toN;
} else {
  return fromN + sum(fromN + 1, toN)
}
};

console.log(sum(3, 7));

module.exports = sum;

/*

(3,7)
is 3 = 7? no,
3 + => {22}
(4,7)
is 4 = 7? no,
4 + => {18}
(5,7)
is 5 = 7? no,
5 + => {13}
(6,7)
is 6 = 7? no,
6 + => {7}  <---
(7,7)           |
is 7 = 7? yes   |
7 --------------

*/
