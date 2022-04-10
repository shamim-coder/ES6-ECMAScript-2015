const products = [
    { name: "water bottle", price: 333, color: "yellow" },
    { name: "mobile", price: 230, color: "black" },
    { name: "smart bottle", price: 2400, color: "orange" },
    { name: "smart watch", price: 2400, color: "orange" },
    { name: "apple watch", price: 7500, color: "red" },
    { name: "watch", price: 430, color: "blue" },
];

const searchProduct = products.filter((product) => product.name.includes("watch"));
// const searchProduct = products.filter((product) => product.name.includes("watch") && product.color.includes("orange"));
console.log("return elements in array", searchProduct); // return elements in array

// find()

const findProduct = products.find((product) => product.name.includes("bottle"));
console.log("return only first element", findProduct); // return only first element
