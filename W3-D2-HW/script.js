"use strict";
exports.__esModule = true;
var TypeOf = [
    {
        age: 27,
        user: "Turki",
        occupation: "Student"
    },
    {
        age: 36,
        name: "Haitham",
        specialty: "Admin"
    },
    {
        age: 30,
        name: "Lamia",
        specialty: "Admin"
    },
    {
        age: 31,
        user: "Ali",
        occupation: "Teacher"
    },
    {
        age: 18,
        user: "Nasser",
        occupation: "Student"
    },
    {
        age: 38,
        name: "Masha",
        specialty: "Admin"
    },
];
function print() {
    for (var i = 0; i < TypeOf.length; i++) {
        if (TypeOf[i]["occupation"]) {
            console.log("name is: ".concat(TypeOf[i].user, ",occupation is ").concat(TypeOf[i].occupation));
        }
        else if (TypeOf[i]["specialty"]) {
            console.log("name is: ".concat(TypeOf[i].name, ",occupation is ").concat(TypeOf[i].specialty));
        }
    }
}
print();
function changeAge(name, age) {
    for (var _i = 0, TypeOf_1 = TypeOf; _i < TypeOf_1.length; _i++) {
        var i = TypeOf_1[_i];
        if (i.name === name)
            i.age = age;
    }
    console.log(TypeOf);
}
(changeAge("Rashed", 26));
