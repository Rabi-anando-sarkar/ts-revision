"use strict";
// class User {
//     public email: string
//     name: string
//     private readonly city: string = ""
//     constructor(
//         email: string,
//         name: string,
//         city: string
//     ) {
//         this.email = email
//         this.name = name
//         this.city = ""
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getGoogleMail() {
        return `Google${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count <= 1");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 5;
    }
}
const rabi = new User("rabi@rabi.com", "rabi");
