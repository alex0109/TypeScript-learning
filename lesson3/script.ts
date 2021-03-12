// Simple example of enum type
enum Directions {
    Up,
    Down,
    Left,
    Right
    // Right = 6    // Assignment index(присвоение индекса)
}

Directions.Up;      // 0 - Index
Directions.Down;    // 1
Directions.Left;    // 2
Directions.Right;   // 3
// or
Directions[0]       // Number of index
Directions[1]
Directions[2]
Directions[3]

// Custom name for keys
enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Using
links.vk            // "https://vk.com/"
links.youtube       // "https://youtube.com/"

// const enum (with using)
const enum links2 {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Using of enum properties
const arr = [links.vk, links.facebook];