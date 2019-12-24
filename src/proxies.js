// Proxies - [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
// - The Proxy object is used to define custom behavior for fundamental operations
// - (e.g. property lookup, assignment, enumeration, function invocation, etc)

//Example 1 - getting values
// targetObject - this is the object that is underlying the proxy
const userTarget = {
  name: "Ray",
  age: 24
};

// handlerObject - this defines the traps/methods available by the proxy to use
const userHandler = {
  get(target, prop) {
    return prop in target ? target[prop] : "This property doesn’t exist, sorry";
  }
};

// proxyObject - will use handler to dictate the way it interacts with the target or fallback on default object behavior
const userProxy = new Proxy(userTarget, userHandler);

// Getting a property, if not available show error
const name = userProxy.name;
console.log({ name }); // { name: 'Ray' }

const age = userProxy.age;
console.log({ age }); // { age: 24 }

const email = userProxy.email;
console.log({ email }); // { email: 'This property doesn’t exist, sorry' }

// Example 2 - Setting values
const transactionTarget = {};

// Setting trap to intercept call to setting actualPay and alter its value
const transactionHandler = {
  set(target, prop, value) {
    if (prop === "actualPay" && typeof value === "number" && value > 0) {
      value = value * 0.97;
    }

    target[prop] = value;
  }
};

const transactionProxy = new Proxy(transactionTarget, transactionHandler);

// Should intercept call and alter value before setting
const payBeforeTax = 1000;
transactionProxy.actualPay = payBeforeTax;
const payAfterTax = transactionProxy.actualPay;
console.log({ payAfterTax }); //Returns '970'
