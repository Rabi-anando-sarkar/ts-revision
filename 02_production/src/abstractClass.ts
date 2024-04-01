abstract class TakePhotoNow {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void
    
    getReelTime(): number{
        return 10
    }
}


class Dribble extends TakePhotoNow {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepia");
        
    }
}

const rabtab = new Dribble("test","testagin",3)