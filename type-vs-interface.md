
# Type Alias vs Interface in TypeScript

## Introduction

TypeScript provides two ways to create custom types: Type Alias and Interface. Both are used to describe the structure of data and make code easier to understand. They look similar, but they have some differences.

## Detailed Explanation

A Type Alias allows us to give a name to a type. It can be used for different types, such as strings, numbers, objects, unions, and intersections.

```ts
type User = {
  name: string;
  age: number;
};
```

An Interface is mainly used to describe the structure of an object. It defines which properties an object should have.

```ts
interface Student {
  name: string;
  age: number;
}
```

Both Type Alias and Interface can describe object structures. However, Type Alias is more flexible because it can also work with union types and primitive types.

One important feature of Interface is that it supports declaration merging. This means we can declare the same interface more than once, and TypeScript combines them into one interface. Interfaces can also extend other interfaces.

For example, we can use an Interface when creating user or student objects. We can use a Type Alias when we need to work with different possible types.

## Conclusion

Both Type Alias and Interface are useful in TypeScript. The choice depends on the situation and the type of data we need to describe.
