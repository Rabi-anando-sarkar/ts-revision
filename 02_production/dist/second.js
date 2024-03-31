"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short, admin) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
        this.admin = admin;
    }
    createStory() {
        console.log("Story Created");
    }
}
class Threads extends Instagram {
    createStory() {
        console.log(`Thread story created ${this.burst}`);
    }
}
