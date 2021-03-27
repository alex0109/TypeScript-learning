// Class 1
// Calss types, including constructor
class User1 {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }

}

const yauhen1 = new User1('Yauhen', 31, 'webDev');

yauhen1; // { name: 'Yauhen', age: 31, nickName: "webDev" }


// Class 2
// Calss types modificators
class User2 {
    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

}

const reybey = new User2('Alex', 16, 'reybey', 1234);

reybey.name;        // "Alex"
// reybey.nickName;    // Prop 'nickName' is private and only accessible within class 'User'
// reybey.age;         // Prop 'age' is protected and only accessible within class 'User' and its subclasses
// reybey.pass = 42;   // Cannot assign to 'pass' it is a read-only property



// Class 3
// Class default properties (example)

class User3 {
    name: string;
    age: number = 20;
    nickName: string = 'webDev';

    constructor(name:string) {
        this.name = name;
    }

    getPass():string {
        return `${this.nickName}${this.age}`;
    }

}

const user2 = new User3('Yauhen');

user2.getPass();


// Class 4
// Minimalize of Class properties
class User4 {
    
    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {}

}


// Class 5
// Get access to private property
class User5 {

    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const yauhn = new User5('Yauhen');

yauhn.setAge(30);
yauhn.myAge = 31;