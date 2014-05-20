// TODO
game.PlayerEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        settings.image = "player1-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "97";
        settings.width = 72;
        settings.height = 97;
        this.parent(x, y, settings);
        
        
        this.collidable = true;
        
        this.renderable.addAnimation("idle", [3]);
        //create a run animation, create an array for values 4 - 14, set the speed 
        this.renderable.setCurrentAnimation("idle");
        this.setVelocity(5, 20);
        
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
        
        update: function () {
        if(me.input.isKeyPressed("right")) {
            this.vel.x += this.accel.x * me.timer.tick;
        }
     else if(me.input.isKeyPressed("left")) {
        this.vel.x -= this.accel.x * me.timer.tick;
    }    
    else {
        this.vel.x = 0;
    }
   
    if (me.input.isKeyPressed('jump')) {
            if (!this.jumping && !this.falling) {
                this.vel.y = -this.maxVel.y * me.timer.tick;
                this.jumping = true;
            }
  
  //if statement (check if jump key was pressed AND player is not jumping AND player is NOT falling)
  //modify the y axis volocity, decrease it
  //this.jumping = true;
  
   
    
     }
     
    var collision = me.game.world.collide(this);
    this.updateMovement();
    return true;
   }
});

game.FlyEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        settings.image = "fly-spritesheet";
        settings.spritewidth = "76";
        settings.spriteheight = "36";
        settings.width = 76;
        settings.height = 36;
        this.parent(x, y, settings);
        
        this.renderable.addAnimation("flying", [2]);
        this.renderable.addAnimation("dead", [0]);
        this.renderable.setCurrentAnimation("flying");
    },
            
        update: function(deltaTime) {
        this.parent(deltaTime);
        return true;
            }
});

game.SlimeEntity = me.ObjectEntity.extend ({
    init: function(x, y, settings) {
        settings.image = "slime-spritesheet";
        settings.spritewidth = "76";
        settings.spriteheight = "36";
        settings.width = 76;
        settings.height = 36;
        this.parent(x, y, settings);
        
        this.renderable.addAnimation("moving", [1, 2]);
        this.renderable.setCurrentAnimation("moving");
    },
            update: function(deltaTime) {
        this.parent(deltaTime);
        return true;
    }
});
game.LevelTrigger = me.ObjectEntity.extend ({
init: function(x, y, settings) {
    this.parent(x, y, settings);
    this.collidable = true;
    this.level = settings.level;
    this.xSpawn = settings.xSpawn;
    this.ySpawn = settings.ySpawn;
  
},
    onCollision: function () {
        this.collidable = false;
        var x = this.xSpawn;
        var y = this.ySpawn;
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer(x, y);
    }
    
});