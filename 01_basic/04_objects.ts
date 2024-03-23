const User = {
    name : "Rabi",
    email : 'rabi@google.com',
    isActive : true
}

function createUser({
    name:string,
    isPaid:boolean
}){}

createUser({name: "zumba",isPaid: false, email: "rabi@rabi.com"})


function createCourse():{name: string,isPaid: boolean}{
    return {name: "react", isPaid: true}
}

console.log(createCourse());

export {}