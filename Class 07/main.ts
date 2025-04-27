// // // Objects in TypeScript
// // // Objects are a collection of key-value pairs

// // let student = {
// //     name: "Maaz Rehan",
// //     age: 14,
// //     major: "Computer Science"
// // }
// // console.log(student);

// let student: {
//     name: string,
//     age: number,
//     major: string
// } = {
//         name: "Maaz Rehan",
//         age: 14,
//         major: "Computer Science"
// }
// // Dot Notattion:
// console.log(student.name);

// // Square Notation:
// console.log(student["major"]);

// Object Aliased:

// type Iteacher = {
//     name: string,
//     age: number,
//     city: string
// }  
// let teacher1 : Iteacher = {
//     name: "Syed Maaz",
//     age: 14,
//     city: "Karachi"
// }
// console.log(teacher1["city"]);


// Structural typing object literals:

// type ITeacher = {
//     name: string,
//     age: number,
//     city: string,
//     exp: number,
// }

// type IStudent = {
//     name: string,
//     age: number,
//     city: string,
//     // class: number,
// }

// let teacher1: ITeacher = {
//     name: "Syed Abdullah",
//     age: 19,
//     city: "Karachi",
//     exp: 2
// }

// let student1: IStudent = {
//     name: "Maaz Rehan",
//     age: 14,
//     // class: 9
//     city: "Karachi"
// }  

//student1 = teacher1; // This is possible because student1 has all the properties of teacher1
// teacher1 = student1; // This is not possible because teacher1 has more properties than student1
// Error

// Ziada per koi issue nahi hay.
// Lakin ager kam hay to issue hay.

// Nested Object:
type ITeacher = {
    name: string,
    age: number,
    exp: number,
    address: {
        city: string,
        state: string,
        postalCode: number,
}
}


let teacher1: ITeacher = {
    name: "Syed Abdullah",
    age: 19,
    exp: 2,
    address: {
        city: "Karachi",
        state: "Sindh",
        postalCode: 12345
    }
}

console.log(teacher1);