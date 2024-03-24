let score:number | string = 33

score = 44
score = "55"
// score = true

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let rabi: User | Admin = {
    name : "Rabi",
    id: 3445
}

rabi = {
    username: "rabianando",
    id: 3665
}

// function getDbId(id: number | string) {
//     console.log(`DB Id : ${id}`);
// }

// getDbId("b46mn3645654mnb6546");
// getDbId(3423534543543534);

function getDbId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else if (typeof id === 'number') {
        console.log(id.toPrecision());
        
    } else {
        console.log(id);
    }
}

getDbId("b46mn3645654mnb6546");
getDbId(3423534543543534);

// array

const dataOne: number[] = [1,2,3,4,5]
const dataTwo: string[] = ["1","2","3","4","5"]
const dataThree: (number | string)[] = [1,2,"3","4"]


let seatAllotmnet: "aisle" | "middle" | "window"

// seatAllotmnet = "crew"