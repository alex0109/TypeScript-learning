// Simple example of enum type
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
    // Right = 6    // Assignment index(присвоение индекса)
})(Directions || (Directions = {}));
Directions.Up; // 0 - Index
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3
// or
Directions[0]; // Number of index
Directions[1];
Directions[2];
Directions[3];
// Custom name for keys
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));
// Using
links.vk; // "https://vk.com/"
links.youtube; // "https://youtube.com/"
// Using of enum properties
var arr = [links.vk, links.facebook];
