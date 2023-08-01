const birthdayGreeter = (name: string, age: number): string => {
  return `Happy birthday ${name}, you are now ${age} years old!`;
};

const birthdayHero = "Jane User";
const age = 22;

console.log(birthdayGreeter(birthdayHero, age));

const add = (a: number, b: number) => {
  return a + b;
}

let x: SomeType;

let x;

npm install -g ts-node typescript

{
  "scripts": {
    "ts-node": "ts-node"
   },
}

npm run ts-node file.ts -- -s --someoption

//tsconfig.json

{
  "compilerOptions":{
    "noImplicitAny": false
  }
}
const multiplicator = (a, b, printTezt)
=> { 
  console.log(printText, a * b);
}

multiplicator(2, 4, '2 x 4 = ');

const multiplicator = (a, b, printText) => {
console.log(printText, a * b);
}

multiplicator('str', 4, '4 * str');
const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
}

multiplicator('str', 4, 'str cu 4 nu mere')
type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation) => {
if (op === 'multiply') {
  return a * b;
} else if (op === 'add') {
return a + b;
} else if (op === 'divide') {
  if (b===0) return 'can\'t divide by 0!';
  return a / b;
  }
}

const calculator = (a: number, b: number, op: Operation): number => {
if (op === 'multiply') {
  return a * b;
} else if (op === 'add') { 
  return a + b;
} else if (op === 'divide') { 
  if (b === 0) return 'this cannot be done';
  return a / b;
  } 
}




