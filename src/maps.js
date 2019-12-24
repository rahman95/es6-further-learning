// Maps - [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
// - The Map object holds key-value pairs and remembers the original insertion order of the keys
// - Designed to efficiently store and retrieve items based on a unique key for each item

// Initialising a Map
const usersMap = new Map();
console.log(usersMap); // Map {}

// Adding new key-value pairs
usersMap.set("Bob", {
  email: "bob@example.com"
});
usersMap.set("Joe", {
  email: "joe@example.com"
});
console.log(usersMap); // Map { 'Bob' => { email: 'bob@example.com' }, 'Joe' => { email: 'joe@example.com' } }

// When adding key-value pairs that already exist, they will be updated
usersMap.set("Bob", {
  email: "bobbieboy@example.com"
});
console.log(usersMap); // Map { 'Bob' => { email: 'bobbieboy@example.com' }, 'Joe' => { email: 'joe@example.com' } }

// Deleting key-value pairs
usersMap.delete("Bob");
console.log(usersMap); // Map { 'Joe' => { email: 'joe@example.com' } }

// Checking for the existance of a key
const hasBob = usersMap.has("Bob");
console.log({ hasBob }); // { hasBob: false }

const hasJoe = usersMap.has("Joe");
console.log({ hasJoe }); // { hasJoe: true }

// Getting key-value pair
const joe = usersMap.get("Joe");
console.log({ joe }); // { joe: { email: 'joe@example.com' } }

// Itterating through maps
const userKeys = usersMap.keys();
console.log({ userKeys }); // { userKeys: [Map Iterator] { 'Joe' } }

const userValues = usersMap.values();
console.log({ userValues }); // { userValues: [Map Iterator] { { email: 'joe@example.com' } } }

usersMap.forEach((value, key) => {
  console.log({ value, key }); // { value: { email: 'joe@example.com' }, key: 'Joe' }
});

// Clearing maps is also possible
usersMap.clear();
console.log(usersMap); // Map {}

// WeakMaps - [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
// - WeakMaps only accept objects as keys
// - Not iterable and do not have a clear() method.

// Initalising a new WeakMap
const usersWeakMap = new WeakMap();
console.log(usersWeakMap); // WeakMap { [items unknown] }

// Adding new item to weakMap
let user1 = {
  name: "Bob"
};
usersWeakMap.set(user1, { email: "bob@example.com" });
console.log(usersWeakMap); // WeakMap { [items unknown] }

// Checking existance
const hasUser1 = usersWeakMap.has(user1);
console.log({ hasUser1 }); // { hasUser1: true }

// Getting value
const user1Value = usersWeakMap.get(user1);
console.log({ user1Value }); // { user1Value: { email: 'bob@example.com' } }

//Similar to WeakSets if keys are set to null they will automatically be garbage collected and memory will be freed up
user1 = null;
