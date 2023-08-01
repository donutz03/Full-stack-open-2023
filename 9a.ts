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
