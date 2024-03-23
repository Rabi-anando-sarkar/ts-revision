type User = {
    name: String
    email: String
    isActive: Boolean
}

function creatUser(user: User):User {
    return {name: "",email: "",isActive: true}
}

creatUser({name: "",email: "",isActive: true})

export {}