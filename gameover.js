var GameOver = {
    
    preload: function(){
        game.load.image('background', 'imgs/space.png');
        game.load.image('btn', 'imgs/button.png');
    },
    
    create: function(){
        backgroundGame = game.add.tileSprite(0, 0, 400, 540, 'background');
        var button = this.add.button(game.width/2, game.height/2, 'btn', this.startGame, this);
        game.input.enabled = true; // Activa los controles
        button.anchor.setTo(0.5);
        var text = game.add.text(game.world.centerX, game.world.centerY - 110, "Juego terminado");
        var textpoints = game.add.text(game.world.centerX, game.world.centerY - 85, "Puntos: "+ score.toString());
        text.anchor.setTo(0.5);
        text.fontSize = 24;
        text.fill = '#fff';
        textpoints.anchor.setTo(0.5);
        textpoints.fontSize = 18;
        textpoints.fill = '#fff';
    },
    
    startGame: function(){
         this.state.start('gameStart');
    }
    
};