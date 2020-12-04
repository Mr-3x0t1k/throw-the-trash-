class Dustbin
{
    constructor (x,y,width,height)
    {
        var options ={
        isStatic : true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.bottomBody=Bodies.rectangle(x,y,width,height,options);
        this.rightBody=Bodies.rectangle(x-width/2,y,width,height,options);
        this.leftBody=Bodies.rectangle(x=width/2,y,width,height,options);
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }

    display ()
    {
        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position
        translate(bottomPos.x, bottomPos.y);
        translate(leftPos.x, leftPos.y);
        translate(rightPos.x, rightPos.y);
        rectMode(CENTER);

        rect(0,0,this.width,this,height);
        rect(0,0,this.width,this,height);
        rect(0,0,this.width,this,height);
    }
}