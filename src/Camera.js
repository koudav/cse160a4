class Camera{
    constructor(){
        this.eye = new Vector3([1,1.3,-2]);
        this.at = new Vector3([0,0,-1]);
        this.up = new Vector3([0,1,0]);
    }

    forward(){
        var f = new Vector3();
        f.set(this.at);
        f = f.sub(this.eye);
        f = f.div(f.magnitude());
        f = f.div(2);
        this.at = this.at.add(f);
        this.eye = this.eye.add(f);
        console.log("forward");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }

    back(){
        var f = new Vector3();
        f.set(this.eye);
        f = f.sub(this.at);
        f = f.div(f.magnitude());
        f = f.div(2);
        this.at = this.at.add(f);
        this.eye = this.eye.add(f);
        console.log("back");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }

    left(){
        var f1 = new Vector3();
        f1.set(this.eye);
        f1 = f1.sub(this.at);
        f1 = f1.div(f1.magnitude());
        var f2 = Vector3.cross(f1, this.up);
        f2 = f2.div(f2.magnitude());
        f2 = f2.div(2);
        this.at = this.at.add(f2);
        this.eye = this.eye.add(f2);
        console.log("left");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }
    
    right(){
        var f1 = new Vector3();
        f1.set(this.eye);
        f1 = f1.sub(this.at);
        f1 = f1.div(f1.magnitude());
        var f2 = Vector3.cross(f1, this.up);
        f2 = f2.div(f2.magnitude());
        f2 = f2.div(2);
        this.at = this.at.sub(f2);
        this.eye = this.eye.sub(f2);
        console.log("right");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }

    panUp(){
        var u = new Vector3();
        u.set(this.up);
        u = u.div(u.magnitude());
        u = u.div(2);
        this.eye = this.eye.add(u);
        this.at = this.at.add(u);
        console.log("right");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }

    panDown(){
        var u = new Vector3();
        u.set(this.up);
        u = u.div(u.magnitude());
        u = u.div(2);
        this.eye = this.eye.sub(u);
        this.at = this.at.sub(u);
        console.log("right");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }

    rotLeft(){
        var d = new Vector3();
        d.set(this.at);
        d = d.sub(this.eye);
        d = d.div(d.magnitude());
        var r = Math.sqrt(d.elements[0] * d.elements[0]  + d.elements[2] * d.elements[2]);
        console.log(d);
        var theta = Math.atan2(d.elements[2], d.elements[0]);
        theta = theta - 15 * (Math.PI / 180);

        var newx = r * Math.cos(theta);
        var newz = r * Math.sin(theta);
        var newd = new Vector3([newx, d.elements[1], newz]);
        d.set(newd);

        var f = new Vector3();
        f.set(this.eye);
        this.at = f.add(d);
        console.log("rotLeft");
        console.log("r", r);
        console.log("theta (in deg): ", theta * 180 / Math.PI);
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }

    rotRight(){
        var d = new Vector3();
        d.set(this.at);
        d = d.sub(this.eye);
        //d = d.div(d.magnitude());
        var r = Math.sqrt(d.elements[0] * d.elements[0] + d.elements[2] * d.elements[2]);
        var theta = Math.atan2(d.elements[2], d.elements[0]);
        theta = theta + 15 * (Math.PI / 180);

        var newx = r * Math.cos(theta);
        var newz = r * Math.sin(theta);
        var newd = new Vector3([newx, d.elements[1], newz]);
        d.set(newd);

        var f = new Vector3();
        f.set(this.eye);
        this.at = f.add(d);
        console.log("rotRight");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }

    rotMouse(rotAngleSpeed){
        var d = new Vector3();
        d.set(this.at);
        d = d.sub(this.eye);
        //d = d.div(d.magnitude());
        var r = Math.sqrt(d.elements[0] * d.elements[0] + d.elements[2] * d.elements[2]);
        var theta = Math.atan2(d.elements[2], d.elements[0]);
        theta = theta + rotAngleSpeed * (Math.PI / 180);

        var newx = r * Math.cos(theta);
        var newz = r * Math.sin(theta);
        var newd = new Vector3([newx, d.elements[1], newz]);
        d.set(newd);

        var f = new Vector3();
        f.set(this.eye);
        this.at = f.add(d);
        console.log("rotRight");
        console.log("eye: ", this.eye);
        console.log("at: ", this.at);
        console.log("up: ", this.up);
    }
}