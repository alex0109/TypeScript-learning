// Class 1
// Calss types, including constructor
var User1 = /** @class */ (function () {
    function User1(name, age, nickName) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
    return User1;
}());
var yauhen1 = new User1('Yauhen', 31, 'webDev');
yauhen1; // { name: 'Yauhen', age: 31, nickName: "webDev" }
// Class 2
// Calss types modificators
var User2 = /** @class */ (function () {
    function User2(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
    return User2;
}());
var reybey = new User2('Alex', 16, 'reybey', 1234);
reybey.name; // "Alex"
// reybey.nickName;    // Prop 'nickName' is private and only accessible within class 'User'
// reybey.age;         // Prop 'age' is protected and only accessible within class 'User' and its subclasses
// reybey.pass = 42;   // Cannot assign to 'pass' it is a read-only property
// Class 3
// Class default properties (example)
var User3 = /** @class */ (function () {
    function User3(name) {
        this.age = 20;
        this.nickName = 'webDev';
        this.name = name;
    }
    User3.prototype.getPass = function () {
        return "" + this.nickName + this.age;
    };
    return User3;
}());
var user2 = new User3('Yauhen');
user2.getPass();
// Class 4
// Minimalize of Class properties
var User4 = /** @class */ (function () {
    function User4(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
    return User4;
}());
// Class 5
// Get access to private property
var User5 = /** @class */ (function () {
    function User5(name) {
        this.name = name;
        this.age = 20;
    }
    User5.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(User5.prototype, "myAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return User5;
}());
var yauhn = new User5('Yauhen');
yauhn.setAge(30);
yauhn.myAge = 31;
