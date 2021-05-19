export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile(place: string): string {
    return `name: ${this.name}, age: ${this.age}, ${place}`;
  }
}

let taro = new Person('Taro', 30);
console.log(taro.profile('tokyo'));
// let hanako = new Person();