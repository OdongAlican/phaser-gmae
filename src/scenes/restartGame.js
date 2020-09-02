import Phaser from 'phaser';
import { saveScore } from '../helpers/scores';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.text(450, 100, 'GAME OVER', { fontSize: 60 }).setOrigin(0.5);

    this.add.text(450, 200, `Your score is: ${window.score}`, { fontSize: 36 }).setOrigin(0.5);

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'user-name')
    inputName.setAttribute('class', 'input-name')
    inputName.setAttribute('placeholder', 'Enter Your Name')
    inputName.type = 'text';
    document.querySelector('.content-section').appendChild(inputName);

    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.1);
    hoverImage.setVisible(false);

    const submitBtn = this.add.image(450, 380, 'submitBtn');
    submitBtn.setScale(0.5);
    submitBtn.setInteractive();

    submitBtn.on('pointerup', () => {
      this.getName();
    });

    const playBtn = this.add.image(450, 450, 'playAgain').setScale(0.8);
    playBtn.setInteractive();

    playBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = playBtn.x - 200;
      hoverImage.y = playBtn.y;
    });

    playBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    playBtn.on('pointerup', () => {
      document.getElementById('user-name').remove();
      this.scene.start('MainScene');
    });
  }

  getName() {
    this.name = document.getElementById('user-name').value;
    console.log(this.name)
    if (this.name.length < 13 && this.name.length > 1) {
      saveScore(this.name, window.score);
      this.callLeaderBoard();
    }
  }

  callLeaderBoard() {
    document.getElementById('user-name').remove();
    this.scene.start('LeaderBoard');
  }
}

export default GameOver;