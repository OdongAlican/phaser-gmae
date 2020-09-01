import Phaser from 'phaser';

class MainMenu extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  create() {
    this.add.image(300, 250, 'background');
    this.add.image(400, 100, 'logo');

    const hoverEffect = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverEffect.setScale(0.1);
    hoverEffect.setVisible(false);

    const hoverEffectTwo = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverEffectTwo.setScale(0.1);
    hoverEffectTwo.setVisible(false);

    const data = [
      {
        imageDetOne: 450,
        imageDetTwo: 320,
        imageDetThree: 'play',
        scale: 0.6,
        loading: 'MainScene',
      },
      {
        imageDetOne: 450,
        imageDetTwo: 390,
        imageDetThree: 'instructions',
        scale: 0.9,
        loading: 'Instructions',
      },
      {
        imageDetOne: 450,
        imageDetTwo: 460,
        imageDetThree: 'leaderBoard',
        scale: 0.9,
        loading: 'LeaderBoard',
      },
    ];

    for (let i = 0; i < data.length; i += 1) {
      const btnClick = this.add.image(data[i].imageDetOne,
        data[i].imageDetTwo, data[i].imageDetThree).setScale(
        data[i].scale,
      );

      btnClick.setInteractive();

      btnClick.on('pointerover', () => {
        hoverEffect.setVisible(true);
        hoverEffectTwo.setVisible(true);
        hoverEffect.x = btnClick.x - 200;
        hoverEffectTwo.x = btnClick.x + 200;
        hoverEffectTwo.y = btnClick.y
        hoverEffect.y = btnClick.y;
      });

      btnClick.on('pointerout', () => {
        hoverEffect.setVisible(false);
        hoverEffectTwo.setVisible(false);

      });

      btnClick.on('pointerup', () => {
        this.scene.start(`${data[i].loading}`);
      });
    }
  }
}

export default MainMenu;