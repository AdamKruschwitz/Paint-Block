import * as THREE from './ThreeJS/three/build/three.module.js';

class Player extends THREE.Mesh {
    constructor() {
        super(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshLambertMaterial({color:0xFFFFFF}));
        this.sideColors = [null, null, null, null, null, null];
        //this.inAnimation = false;
        this.animationStart;
    }

    animateStep(curTimestamp) {
        //if(!this.inAnimation) inAnimation = true;
        // A one second animation, rotating by the x axis by 90 deg (half pi radians)
        let angle = (Math.PI/2) * (curTimestamp/750);
        let axis = new THREE.Vector3(1, 0, 0);
        let radius = Math.sqrt((50) * (50)); //Center of square to corner
        //console.log(this.width);
        //let newPos = new THREE.Vector3();
        this.setRotationFromAxisAngle(axis, angle);
        this.position.set(0, 0, -Math.abs(radius * Math.sin(angle*2))) 
    }
}

export { Player }