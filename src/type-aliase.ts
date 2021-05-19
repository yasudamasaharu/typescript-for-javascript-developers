export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1: Profile = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example1;