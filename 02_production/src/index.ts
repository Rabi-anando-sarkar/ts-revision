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
    protected _courseCount = 1
    private readonly city: string = ""
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {
    }

    private deleteToken () {
        console.log("Token deleted");   
    }

    get getGoogleMail() :string{
        return `Google${this.email}`
    }

    get courseCount():number {
        return this._courseCount
    }

    set courseCount(courseNumber) {
        if(courseNumber <= 1) {
            throw new Error("Course count <= 1")
        }
        this._courseCount = courseNumber
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 5
    }
}

const rabi = new User("rabi@rabi.com","rabi")


