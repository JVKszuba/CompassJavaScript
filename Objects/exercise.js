// Exercise 1 - Adress Object

console.log("Exercise 1 - Address Object");

function Adress(street, city, zipCode) {

    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function showAddress(address) {

    if (!(address instanceof Adress)) return "Invalid address object";

    for (const key in address) console.log(`${key}: ${address[key]}`);
}

const myAddress = new Adress("123 Main St", "Springfield", "12345");
showAddress(myAddress);

// Exercise 2 - Object Equality

console.log("Exercise 2 - Object Equality");

function areEqual(obj1, obj2) {

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (const key in obj1) if (obj1[key] !== obj2[key]) return false;
    
    return true;
}

function areSame(obj1, obj2) {

    return obj1 === obj2;
}

adr2_1 = new Adress("123 Main St", "Springfield", "12345");
adr2_2 = new Adress("123 Main St", "Springfield", "123");

console.log(areEqual(adr2_1, adr2_2));
console.log(areSame(adr2_1, adr2_1));

// Exercise 3 - Blog Post Object

console.log("Exercise 3 - Blog Post Object");

function BlogPost(title, body, author, views, commentAuthor, commentBody) {

    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = [{author: commentAuthor, body: commentBody}];
    this.isLive = true;
}

blogPost = new BlogPost("My First Post", "This is the body of my first post.", 
                        "John Doe", 100, "Jane Doe", "Great post!");

console.log(blogPost);

// Exercise 4 - Constructor Function

console.log("Exercise 4 - Constructor Function");

function Post(title, body, author) {

    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

post = new Post("My Second Post", "This is the body of my second post.", "John Doe");
console.log(post);

// Exercise 5 - Price Range Object

console.log("Exercise 5 - Price Range Object");

let priceRange = [
    {label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10},
    {label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20},
    {label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50},
]

let restaurants = [
    {name: "Restaurant A", priceRange: priceRange[0]},
    {name: "Restaurant B", priceRange: priceRange[1]},
    {name: "Restaurant C", priceRange: priceRange[2]},
];

function showRestaurants(restaurants) {

    for (const restaurant of restaurants) {
        console.log(`Name: ${restaurant.name}, Price Range: ${restaurant.priceRange.label} (${restaurant.priceRange.tooltip})`);
    }
}

showRestaurants(restaurants);