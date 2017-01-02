var ship;
var bullets;
var timebetweenbullets = 200;
var time = 0;
var Game = {
    
    preload: function(){
        game.load.image('background', 'imgs/space.png');
        game.load.image('ship', 'imgs/nave.png');
        game.load.image('laser', 'imgs/laser.png');
        game.load.image('enemy', 'imgs/enemy.png');
    },
    
    create: function(){
        backgroundGame = game.add.tileSprite(0, 0, 400, 540, 'background');
        game.physics.startSystem(Phaser.Physics.ARCADE);
        ship = game.add.sprite(game.width/2, 490, 'ship');
        ship.anchor.setTo(0.5);
        game.physics.arcade.enable(ship);
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.setBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(1500, 'laser');
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
    },
    
    update: function(){
        ship.rotation = game.physics.arcade.angleToPointer(ship) + Math.PI/2;
        if (game.input.activePointer.isDown){
            this.shot();
        }
    },
    
    shot: function(){
        if(game.time.now > time && bullets.countDead() > 0){
            time = game.time.now + timebetweenbullets;
            var bullet = bullets.getFirstDead();
            bullet.anchor.setTo(0.5);
            bullet.reset(ship.x , ship.y);
            bullet.rotation = game.physics.arcade.angleToPointer(bullet) + Math.PI/2;
            game.physics.arcade.moveToPointer(bullet, 200);
        }
    }
    
};