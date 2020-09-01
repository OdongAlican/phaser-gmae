import Phaser from 'phaser';
import LoadScene from './scenes/preload';
import MainMenu from './scenes/menu';
import MainScene from './scenes/mainScene'

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 900,
    height: 600,
    scene: [
      LoadScene,
      MainMenu,
      MainScene
    ],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 400 },
        debug: false,
      },
    },
  };
  
  const game = new Phaser.Game(config);