// type User = {
//     name: String
//     email: String
//     isActive: Boolean
// }

// function creatUser(user: User):User {
//     return {name: "",email: "",isActive: true}
// }

// creatUser({name: "",email: "",isActive: true})



type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCard?: number
    //readonly arr: readonly string[]
}

let myUser: User = {
    _id: "12345",
    name: "rabi",
    email: "rabi@rabi.com",
    isActive: false,
    //arr: []
}

myUser.email = "rabi@gmail.com"
//myUser.arr.push('rabi','anando','sarkar')

// console.log(myUser.email);
// console.log(myUser.arr);


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCard: cardDetails = {
    cardnumber: "12345",
    carddate: "435435",
    cvv: 345345
}

console.log(myCard);

export {}