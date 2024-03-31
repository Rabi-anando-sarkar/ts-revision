interface TakePhoto {
    cameraMode: string
    filter: string
    burst: boolean
}

interface Story {
    createStory():void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: boolean
    ){}
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: boolean,
        public short: string,
        private admin: boolean
    ){}

    createStory(): void {
        console.log("Story Created");
        
    }
}

class Threads extends Instagram implements Story {
    createStory(): void {
        console.log(`Thread story created ${this.burst}`);
    }
}