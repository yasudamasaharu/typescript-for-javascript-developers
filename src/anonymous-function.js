"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let bim: (height: number, weight: number) => number;
var bmi = function (height, weight) {
    return weight / (height * height);
};
console.log(bmi(1.78, 86));
