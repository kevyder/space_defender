var game = new Phaser.Game(400, 540, Phaser.CANVAS, 'gameblock');
game.state.add('gameStart', Game);
game.state.add('gameover', GameOver);

game.state.start('gameStart');