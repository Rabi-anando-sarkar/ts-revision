"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Rabi",
    email: 'rabi@google.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "zumba", isPaid: false });
function createCourse() {
    return { name: "react", isPaid: true };
}
console.log(createCourse());
