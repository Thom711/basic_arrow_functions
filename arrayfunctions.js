const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
];

// Filter de array aan de hand van een query per item
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filteredItems);

// Map naar een nieuwe array aan de hand van bepaalde criteria
const itemNames = items.map((item) => {
    return item.name;
});
console.log(itemNames);

// Returnt de 1e item die hij tegen komt die aan de criteria voldoet
const foundItem = items.find((item) => {
    return item.name === "Book";
});
console.log(foundItem);

// Itereer over elk item in de array en daar kan je mee doen wat je wilt
items.forEach((item) => {
    console.log(item.name);
});

// returnt true or false of min. 1 item in de array aan de criteria voldoet
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});
console.log(hasInexpensiveItems);

// cumulatieve operatie per item in de array. 1e param is de teller, 2e is de functie per item.
// laatste param is waar de teller op moet beginnen.
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);
console.log(totalPrice);

const numbers = [1, 2, 3, 4, 5];
const includesTwo = numbers.includes(2);
console.log(includesTwo);

