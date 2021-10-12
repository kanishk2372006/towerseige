class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :-0.1,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      if(this.body.velocity.x<4){
this.body.visiblity=255



      }
      else{
        world.remove(world,this.body)
        this.body.visiblity=0;
      }
      
    }
}