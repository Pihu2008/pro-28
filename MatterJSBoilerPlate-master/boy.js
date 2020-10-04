class Boy {
    constructor(x,y,width,height) {
      var options={
        isStatic: true
      }
      this.x=x
      this.y=y
      this.width = width;
      this.height = height;
      this.image = loadImage("boy.png");
      this.body = Bodies.rectangle(this.x,this.y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var boypos =this.body.position;
      push()
      translate(boypos.x,boypos.y)
      rectMode(CENTER);
      imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
      //rect(0,0, this.width, this.height);
      pop()
    }
  }