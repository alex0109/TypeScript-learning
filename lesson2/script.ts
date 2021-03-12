const createPass = (name: string, age: number) => `${name}${age}`;
// or
const createPass1 = (name: string, age: number | string) => `${name}${age}`;

createPass1('Jack', 31);
createPass1('Jack', '31');

// Default arguments
const createPass2 = (name: string = 'Max', age: number | string = 20) => `${name}${age}`;

// func with optional second argument 'age'
const createPass3 = (name: string, age?: number) => `${name}${age}`;

// REST
const createSkills = (title, ...skills) => `${title}, my skills are ${skills.join()}`;

// REST type
const createSkills1 = (title: string, ...skills: Array<string>) => `${title}, my skills are ${skills.join()}`;

// Call function with REST arguments
createSkills('Jack', 'JS', 'ES6', 'React');

// Void 
// const greetUser: void = ( ) => {
//     alert("Hello, nice to meet you!");
// }

// Never Type 
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
}

// Func infinite loop
const infiniteLoop = () => {
    while(true){

    }
}

// Func variable type
// let myFunc;

// Describe function type
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
    alert(`Hello, ${name}, nice to see you!`);
}

myFunc = oldFunc;