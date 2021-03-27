// Снизу плохой пример который нарушает принцип dry(dont reapet yourself)
var user = {
    name: 'Yauhen',
    age: 20,
    nickName: 'reybey'
};
var admin = {
    name: 'Max',
    age: 20,
    nickName: 'Mad'
};
// Apply type for objects with the same structure
var user1 = {
    name: 'Yauhen',
    age: 30,
    nickName: 'reybey'
};
var admin2 = {
    name: 'Max',
    age: 20,
    getPass: function () {
        return "" + this.name + this.age;
    }
};
