"use strict";
class TakePhotoNow {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 10;
    }
}
class Dribble extends TakePhotoNow {
    constructor(cameraMode, filter, burstMode) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const rabtab = new Dribble("test", "testagin", 3);
