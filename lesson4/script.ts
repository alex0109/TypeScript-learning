// Снизу плохой пример который нарушает принцип dry(dont reapet yourself)

let user: {name: string, age: number, nickName: string} = {
    name: 'Yauhen',
    age: 20,
    nickName: 'reybey',
}

let admin: {name: string, age: number, nickName: string} = {
    name: 'Max',
    age: 20,
    nickName: 'Mad',
}

// Вот это уже лучше

// Using Type for objects structer 
type Person = {
    name: string, 
    age: number,
    nickName?: string,          // Optinal property
    getPass?: () => string,     // Optinal property

};

// Apply type for objects with the same structure
let user1: Person = {
    name: 'Yauhen',
    age: 30,
    nickName: 'reybey',
};

let admin2: Person = {
    name: 'Max',
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
};