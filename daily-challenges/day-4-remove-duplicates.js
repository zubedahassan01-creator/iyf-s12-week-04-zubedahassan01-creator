const uniqueWithSet = (items) => [...new Set(items)];
const uniqueWithFilter = (items) => items.filter((item, index) => items.indexOf(item) === index);
const values = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueWithSet(values));
console.log(uniqueWithFilter(values));
