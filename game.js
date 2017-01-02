var ship;
var bullets;
var timebetweenbullets = 300;
var time = 0;
var enemies;
var timer;
var score;
var scoretext;
var lifes;
var lifestext;
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
        
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.setBodyType = Phaser.Physics.ARCADE;
        enemies.createMultiple(200, 'enemy');
        enemies.setAll('anchor.x', 0.5);
        enemies.setAll('anchor.y', 0.5);
        enemies.setAll('checkWorldBounds', true);
        enemies.setAll('outOfBoundsKill', true);
        
        timer = game.time.events.loop(700, this.createEnemy, this);
        score = 0;
        lifes = 3
        game.add.text(30, 20, "Points:", {font: "14px sans-serif", fill: "#FFF"});
        scoretext = game.add.text(80, 20, "0", {font: "14px sans-serif", fill: "#FFF"});
        game.add.text(320, 20, "Lifes:", {font: "14px sans-serif", fill: "#FFF"});
        lifestext = game.add.text(360, 20, "3", {font: "14px sans-serif", fill: "#FFF"});
    },
    
    update: function(){
        ship.rotation = game.physics.arcade.angleToPointer(ship) + Math.PI/2;
        if (game.input.activePointer.isDown){ this.shot() }
        game.physics.arcade.overlap(bullets, enemies, this.collision, null, this);
        enemies.forEachAlive(function(enemy){
            if(enemy.position.y > 520 && enemy.position.y < 521){
                lifes--;
                lifestext.text = lifes;
            }
        });
        
        if(lifes == 0){
            game.state.start('gameover');
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
    },
    
    createEnemy: function(){
        var enemy = enemies.getFirstDead();
        var number = Math.floor(Math.random()*10)+1;
        enemy.reset(number*39, 0);
        enemy.anchor.setTo(0.5);
        enemy.body.velocity.y = 100;
        enemy.checkWorldBounds = true;
        enemy.outOfBoundsKill = true;
    },
    
    collision: function(b, e){
        b.kill();
        e.kill();
        score++;
        scoretext.text = score;
    }
    
};