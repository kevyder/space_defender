var ship;
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
    },
    
    update: function(){
        
    }
    
};