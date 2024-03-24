interface User {
    readonly dbId: number
    email: string,
    userId: number,
    gooogleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

const details: User = {
    dbId: 546546,
    email: "Rabi@google.com",
    userId: 16,
    startTrial: () => {
        return 'trial started'
    },
    getCoupon: (name: 'test10', off: 34) => {
        return 10
    },
    githubToken: "skjdfkjsfg743785643"
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "moderator" | "member"
}



details.email = "rabi@meta.com"
