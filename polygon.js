class Polygon {
    constructor(bodyA, anchor){
        var options ={
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.004,

            length:1
        }
       
        this.pointB = anchor;
        this.poly = Constraint.create(options);
        World.add(world, this.poly)
    }

    fly(){
        this.poly.bodyA = null
    }
    //attach(body){
        //this.poly.bodyA = body;
    //}

    display(){
        if(this.poly.bodyA){ 
            var pointA = this.poly.bodyA.position; 
            var pointB = this.pointB; 
            strokeWeight(4); 
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        } 
     }
}