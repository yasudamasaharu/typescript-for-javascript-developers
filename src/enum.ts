export {};

enum Months {
  January =1,
  Februrary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  Octouber,
  November,
  December
}

console.log(Months.January);
console.log(Months.Februrary);
console.log(Months.December);

// const MonthsJs = {
//   January: 0,
//   Februrary: 1
// };

// console.log(MonthsJs.January);
// console.log(MonthsJs.Februrary);

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008800',
  BLUE = '#0000ff',
  // YELLOW = '#ffff00',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#ffff00',
  GRAY = '#808080'
}
COLORS.YELLOW;