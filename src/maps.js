// Maps - [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
// - The Map object holds key-value pairs and remembers the original insertion order of the keys
// - Designed to efficiently store and retrieve items based on a unique key for each item

// Initialising a Map
const users = new Map();
console.log(users); // Map {}

// Adding new key-value pairs
users.set("Bob", {
  email: "bob@example.com"
});
users.set("Joe", {
  email: "joe@example.com"
});
console.log(users); // Map { 'Bob' => { email: 'bob@example.com' }, 'Joe' => { email: 'joe@example.com' } }

// When adding key-value pairs that already exist, they will be updated
users.set("Bob", {
  email: "bobbieboy@example.com"
});
console.log(users); // Map { 'Bob' => { email: 'bobbieboy@example.com' }, 'Joe' => { email: 'joe@example.com' } }

// Deleting key-value pairs
users.delete("Bob");
console.log(users); // Map { 'Joe' => { email: 'joe@example.com' } }

// Checking for the existance of a key
const hasBob = users.has("Bob");
console.log({ hasBob }); // { hasBob: false }

const hasJoe = users.has("Joe");
console.log({ hasJoe }); // { hasJoe: true }

// Getting key-value pair
const joe = users.get("Joe");
console.log({ joe }); // { joe: { email: 'joe@example.com' } }

// Itterating through maps
const userKeys = users.keys();
console.log({ userKeys }); // { userKeys: [Map Iterator] { 'Joe' } }

const userValues = users.values();
console.log({ userValues }); // { userValues: [Map Iterator] { { email: 'joe@example.com' } } }

users.forEach((value, key) => {
  console.log({ value, key }); // { value: { email: 'joe@example.com' }, key: 'Joe' }
});

// Clearing maps is also possible
users.clear();
console.log(users); // Map {}
