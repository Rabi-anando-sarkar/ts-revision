var score = 33;
score = 44;
score = "55";
var rabi = {
    name: "Rabi",
    id: 3445
};
rabi = {
    username: "rabianando",
    id: 3665
};
// function getDbId(id: number | string) {
//     console.log(`DB Id : ${id}`);
// }
// getDbId("b46mn3645654mnb6546");
// getDbId(3423534543543534);
function getDbId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else if (typeof id === 'number') {
        console.log(id.toPrecision());
    }
    else {
        console.log(id);
    }
}
getDbId("b46mn3645654mnb6546");
getDbId(3423534543543534);
