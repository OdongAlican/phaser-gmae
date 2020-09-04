import Phaser from 'phaser';
import fetchData from '../helpers/scores';

class GameOver extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.image(450, 100, 'gameOver').setScale(0.9);

    this.add.text(450, 200, `Total Score: ${window.score}`, { fontSize: 36 }).setOrigin(0.5);

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'user-name');
    inputName.setAttribute('class', 'input-name');
    inputName.setAttribute('placeholder', 'Enter Your Name');
    inputName.type = 'text';
    document.querySelector('.content-section').appendChild(inputName);

    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.15);
    hoverImage.setVisible(false);

    const hoverImageTwo = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImageTwo.setScale(0.15);
    hoverImageTwo.setVisible(false);

    const submitBtn = this.add.image(450, 380, 'submitBtn');
    submitBtn.setScale(1.0);
    submitBtn.setInteractive();

    submitBtn.on('pointerup', () => {
      this.getName();
    });


    const buttonDetails = [
      {
        btnValue: 'playAgain',
        scaleVal: 0.8,
        yValue: 220,
        sceneLoad: 'MainScene',
      },
      {
        btnValue: 'instructions',
        scaleVal: 0.8,
        yValue: 650,
        sceneLoad: 'Instructions',
      },
    ];

    for (let i = 0; i < buttonDetails.length; i += 1) {
      const clickButton = this.add.image(
        buttonDetails[i].yValue, 520, buttonDetails[i].btnValue,
      ).setScale(
        buttonDetails[i].scaleVal,
      );
      clickButton.setInteractive();

      clickButton.on('pointerover', () => {
        hoverImage.setVisible(true);
        hoverImageTwo.setVisible(true);
        hoverImage.x = clickButton.x - 200;
        hoverImageTwo.x = clickButton.x + 200;
        hoverImage.y = clickButton.y;
        hoverImageTwo.y = clickButton.y;
      });

      clickButton.on('pointerout', () => {
        hoverImage.setVisible(false);
        hoverImageTwo.setVisible(false);
      });

      clickButton.on('pointerup', () => {
        document.getElementById('user-name').remove();
        this.scene.start(`${buttonDetails[i].sceneLoad}`);
      });
    }
  }


  getName() {
    this.name = document.getElementById('user-name').value;
    if (this.name.length < 13 && this.name.length > 1) {
      const fetchDataInstance = fetchData();
      fetchDataInstance.saveScore(this.name, window.score);
      this.callLeaderBoard();
    }
  }

  callLeaderBoard() {
    document.getElementById('user-name').remove();
    this.scene.start('LeaderBoard');
  }
}

export default GameOver;