// Sets - [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
// - The Set object allows you to store unique values of any type.

// Initialize a set of fastFood items
const fastFood = ["🍕", "🍔", "🌭", "🌮", "🍗"];
const fastFoodSet = new Set(fastFood);
console.log(fastFoodSet); // Set { '🍕', '🍔', '🌭', '🌮', '🍗' }

// Adding items
fastFoodSet.add("🍟");
console.log(fastFoodSet); // Set { '🍕', '🍔', '🌭', '🌮', '🍗', '🍟' }

// Adding existing items has no effect as sets only allow unique values
fastFoodSet.add("🍔");
console.log(fastFoodSet); // Set { '🍕', '🍔', '🌭', '🌮', '🍗', '🍟' }

// Deleting items
fastFoodSet.delete("🌮");
console.log(fastFoodSet); // Set { '🍕', '🍔', '🌭', '🍗', '🍟' }

// Deleting non-existent items has no effect
fastFoodSet.delete("🍦");
console.log(fastFoodSet); // Set { '🍕', '🍔', '🌭', '🍗', '🍟' }

// Getting size of a Set
const size = fastFoodSet.size;
console.log({ size }); // { size: 5 }

// Querying existence of items
const hasIceCream = fastFoodSet.has("🍦");
console.log({ hasIceCream }); // { hasIceCream: false }

const hasPizza = fastFoodSet.has("🍕");
console.log({ hasPizza }); // { hasPizza: true }

// Iterating through sets - returns `Set Iterator`
const keys = fastFoodSet.keys();
console.log({ keys }); // { keys: [Set Iterator] { '🍕', '🍔', '🌭', '🍗', '🍟' } }

const values = fastFoodSet.values();
console.log({ values }); // { values: [Set Iterator] { '🍕', '🍔', '🌭', '🍗', '🍟' } }

// Itterating through items
console.log(keys.next()); // { value: '🍕', done: false }
console.log(keys.next()); // { value: '🍔', done: false }
console.log(keys.next()); // { value: '🌭', done: false }
console.log(keys.next()); // { value: '🍗', done: false }
console.log(keys.next()); // { value: '🍟', done: false }
console.log(keys.next()); // { value: undefined, done: true }

// Sets implement the Iterable protocol - allowing you to use them in loops
for (let fastFood of fastFoodSet) {
  console.log(fastFood);
  // 1 loop: 🍕
  // 2 loop: 🍔
  // 3 loop: 🌭
  // 4 loop: 🍗
  // 5 loop: 🍟
}

// Clearing all items in Set
fastFoodSet.clear();
console.log(fastFoodSet); // Set {}

// WeakSets - [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
// - WeakSets only accept objects and are not iterable
// - They do not have a clear() method

const user1 = {
  name: "bob",
  email: "bob@example.com"
};

const user2 = {
  name: "tim",
  email: "tim@example.com"
};

const user3 = {
  name: "jay",
  email: "jay@example.com"
};

const users = [user1, user2, user3];
let usersWeakSet = new WeakSet(users);
console.log(usersWeakSet); // WeakSet { [items unknown] }

const hasUser1 = usersWeakSet.has(user1);
console.log({ hasUser1 }); // { hasUser1: true }

// Adding items to WeakSet
const user4 = {
  name: "lee",
  email: "lee@example.com"
};
usersWeakSet.add(user4);

// throws error if not object
// usersWeakSet.add("user4"); // TypeError: Invalid value used in weak set

// Clearing WeakSet
// - Objects can only be deleted by setting them to null
// - JS garbage collection will automatically free up memory allocated to the null object
usersWeakSet = null;
