"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmi = function (height, weight, printable) {
    if (printable) {
        console.log('bmi');
    }
    return weight / (height * height);
};
bmi(1.78, 86);
// bmi(身長, 体重, console.logで出力するかどうか？)
// bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86);
