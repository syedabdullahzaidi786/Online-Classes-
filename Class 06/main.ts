// Union Literals:

// 1. Union Literals are a way to define a type that can be one of several specific values.
// 2. They are often used in conjunction with string literal types to create a more flexible type system.
// 3. Union Literals can be used to create a type that can be one of several specific strings, numbers, or booleans.
// 4. They are useful for defining a set of allowed values for a variable or parameter.
// 5. Union Literals can be used to create a type that can be one of several specific objects or arrays.
// 6. They are often used in conjunction with interfaces or type aliases to create a more complex type system.
// 7. Union Literals can be used to create a type that can be one of several specific functions or methods.
// 8. They are useful for defining a set of allowed functions or methods for a variable or parameter.
// 9. Union Literals can be used to create a type that can be one of several specific classes or constructors.
// 10. They are often used in conjunction with class or constructor types to create a more complex type system.

let Name: string | number | boolean = "Syed Abdullah";
Name = 1234;
// Name = true; // This is valid because Name can be a boolean
console.log(Name); // Output: true

// Type OF: Data type of a variable in TypeScript is determined at compile time, not at runtime.

const Name1 = "syed abdullah";
console.log(Name1.toUpperCase()); // Output: SYED ABDULLAH
console.log(typeof (Name1)); // Output: string
