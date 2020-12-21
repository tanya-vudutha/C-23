class Box
{
    constructor(x,y,width,height)
    {
        var z = {
            restitution:0.8,
            friction:0.3,
            density:1.0
        }
        this.boxes=Bodies.rectangle(x,y,width,height,z);
        this.width=width;
        this.height=height;
        World.add(world,this.boxes);
    }

    display()
    {
        var pos= this.boxes.position;
        var angle= this.boxes.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}