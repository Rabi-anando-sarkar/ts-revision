const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any):any {
    return val
}

function identityThree<Type>(val: Type):Type {
    return val
}

function identityFour<T>(val: T):T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

function identityFive<Type extends Bottle>({brand,type}:Bottle) {
    
}

function getSearchProducts<T>(products: T[]): T {
    return products[3]
}


const getMoreSearchProducts = <T,>(products: T[]):T => {
    const myIndex = 5
    return products[myIndex]
}