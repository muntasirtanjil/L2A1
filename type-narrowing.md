
# Type Narrowing in TypeScript

## Introduction

Type Narrowing is an important feature of TypeScript. It helps us work safely with variables that can contain different types of values. It allows TypeScript to understand the exact type of a value before we use it.

## Detailed Explanation

Type Narrowing means reducing the possible types of a variable based on certain conditions. There are different ways to narrow a type in TypeScript. Three common ways are `typeof`, `instanceof`, and the `in` operator.

The `typeof` operator is used to check primitive types like string, number, and boolean.

```ts
function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

The `instanceof` operator checks whether an object belongs to a particular class.

```ts
class Dog {}

const pet = new Dog();

if (pet instanceof Dog) {
  console.log("This is a dog.");
}
```

The `in` operator checks whether a property exists inside an object.

```ts
if ("email" in user) {
  console.log(user.email);
}
```

These methods help TypeScript understand which type is being used in different situations. They are especially useful when working with union types. Without proper type checking, we may get unexpected errors when using a value of the wrong type.

## Conclusion

Type Narrowing makes TypeScript code safer and easier to manage. Understanding `typeof`, `instanceof`, and the `in` operator helps us handle different types of values correctly.
