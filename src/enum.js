"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["Februrary"] = 2] = "Februrary";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["Jun"] = 6] = "Jun";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["Octouber"] = 10] = "Octouber";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
console.log(Months.January);
console.log(Months.Februrary);
console.log(Months.December);
// const MonthsJs = {
//   January: 0,
//   Februrary: 1
// };
// console.log(MonthsJs.January);
// console.log(MonthsJs.Februrary);
var COLORS;
(function (COLORS) {
    COLORS["RED"] = "#ff0000";
    COLORS["WHITE"] = "#ffffff";
    COLORS["GREEN"] = "#008800";
    COLORS["BLUE"] = "#0000ff";
    // YELLOW = '#ffff00',
    COLORS["BLACK"] = "#000000";
})(COLORS || (COLORS = {}));
var green = COLORS.GREEN;
console.log({ green: green });
(function (COLORS) {
    COLORS["YELLOW"] = "#ffff00";
    COLORS["GRAY"] = "#808080";
})(COLORS || (COLORS = {}));
COLORS.YELLOW;
