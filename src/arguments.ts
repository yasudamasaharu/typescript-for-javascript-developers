export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = 
(
  height: number,
   weight: number,
   printable?: boolean
): number => {
  if(printable) {
    console.log('bmi'); 
  }
  return weight / (height * height);
};
bmi(1.78, 86);

// bmi(身長, 体重, console.logで出力するかどうか？)
// bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86)