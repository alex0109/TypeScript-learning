var createPass = function (name, age) { return "" + name + age; };
// or
var createPass1 = function (name, age) { return "" + name + age; };
createPass1('Jack', 31);
createPass1('Jack', '31');
// Default arguments
var createPass2 = function (name, age) {
    if (name === void 0) { name = 'Max'; }
    if (age === void 0) { age = 20; }
    return "" + name + age;
};
// func with optional second argument 'age'
var createPass3 = function (name, age) { return "" + name + age; };
// REST
var createSkills = function (title) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return title + ", my skills are " + skills.join();
};
// REST type
var createSkills1 = function (title) {
    var skills = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        skills[_i - 1] = arguments[_i];
    }
    return title + ", my skills are " + skills.join();
};
// Call function with REST arguments
createSkills('Jack', 'JS', 'ES6', 'React');
// Void 
// const greetUser: void = ( ) => {
//     alert("Hello, nice to meet you!");
// }
// Never Type 
// Function return Error
var msg = "hello";
var error = function (msg) {
    throw new Error(msg);
};
// Func infinite loop
var infiniteLoop = function () {
    while (true) {
    }
};
// Func variable type
// let myFunc;
// Describe function type
var myFunc;
function oldFunc(name) {
    alert("Hello, " + name + ", nice to see you!");
}
myFunc = oldFunc;
