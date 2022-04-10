// Syntax
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

const number = [25, 33, 47, 66, 15, 33, 21];
const sqrNumber = number.map((x) => x * x);
// console.log(...sqrNumber);

const product = [
    { name: "water bottle", price: 333, color: "yellow" },
    { name: "mobile", price: 230, color: "black" },
    { name: "smart watch", price: 2400, color: "orange" },
    { name: "smart watch", price: 2400, color: "orange" },
];

const products = product.map((p) => p.name);

// console.log(products);

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];
const newArray = kvArray.map(({ key, value }) => {
    return { [key]: value };
});

// const newArray = kvArray.forEach(({ key, value }) => {
//     return { [key]: value };
// });
