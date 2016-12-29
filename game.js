var Game = {
    
    preload: function(){
        game.load.image('background', 'imgs/space.png');
        game.load.image('ship', 'imgs/nave.png');
        game.load.image('laser', 'imgs/laser.png');
        game.load.image('enemy', 'imgs/enemy.png');
    },
    
    create: function(){
        backgroundGame = game.add.tileSprite(0, 0, 400, 540, 'background');
    },
    
    update: function(){
        
    }
    
};