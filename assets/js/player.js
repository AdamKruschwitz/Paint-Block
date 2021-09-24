import * as THREE from './ThreeJS/three/build/three.module.js';
const states = {
    ONCREATE: "onCreate",
    STEPPING: "stepping",
    ONSTEPEND: "onStepEnd",
    IDLE: "idle"
}

class Player extends THREE.Mesh {
    constructor() {
        super(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshLambertMaterial({color:0xFFFFFF}));
        this.sideColors = [null, null, null, null, null, null];
        //this.inAnimation = false;
        this.animationStart=0;
        this.animationAxis = new THREE.Vector3(1, 0, 0);
        this.state=states.ONCREATE;
        this.clock = new THREE.Clock(false); // Set to false so the clock doesn't run automatically.
        this.stepTime = 1;
        this.stepAxis = null;
    }

    update() {
        switch(this.state) {
            case states.ONCREATE:
                this.#onCreate();
                break;

            case states.STEPPING:
                this.#stepping();
                break;

            default:
                /// idle
                break;
        }
    }

    // Handles changing rotation and position during animation
    #animateStep() {
        let timestamp;
        if(this.clock.elapsedTime > this.stepTime) timestamp = this.stepTime;
        else timestamp = this.clock.getElapsedTime();

        if(timestamp < this.stepTime) {
            // Calculate where the block should be at this part of the animation and move it there
            let angle = (Math.PI/2) * (timestamp/this.stepTime); // the angle, 90 degrees at maximum
            let radius = Math.sqrt((50) * (50)); //Center of side to corner
            
            this.setRotationFromAxisAngle(this.stepAxis, angle);
            // let horizontalPos = radius * Math.cos(angle*2);
            // let horizontalMovementInBothDirections = new THREE.Vector3(horizontalPos, horizontalPos, 0);
            // let horizontalMovement = horizontalMovementInBothDirections.multiply(this.stepAxis);
            let verticalMovement = new THREE.Vector3(0, 0, Math.abs(radius * Math.sin(angle*2)));
            // let newPosition = horizontalMovement.add(verticalMovement);
            // console.log(newPosition);
            this.position.set(0, 0, -verticalMovement.z); 
        } else {
            // Move the block to it's final position
            let angle = Math.PI/2;
            // let horizontalPos = radius * Math.cos(angle*2);
            // let horizontalMovementInBothDirections = new THREE.Vector3(horizontalPos, horizontalPos, 0);
            // let horizontalMovement = horizontalMovementInBothDirections.multiply(this.stepAxis);
            this.position.set(0, 0, 0);

            this.state = states.IDLE;
            this.clock.stop();
        }
    }

    #onCreate() {
        //Code for when the object is created
    }

    #stepping() {
        // Code for while the player is stepping
        this.#animateStep();
    }

    #onStepEnd() {
        // Code for directly after the player finishes stepping
        // Will be used later to calculate whether this step paints a square
    }

    // A method called to make the player step in a cardinal direction
    // axis is a Vector3 where 1 is the value of the axis to use and the others are 0
    beginStep(axis) {
        this.state=states.STEPPING;
        this.clock.start();
        this.stepAxis = axis;
    }
}

export { Player }