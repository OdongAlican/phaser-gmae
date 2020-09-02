import Phaser from 'phaser';

class Instructions extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    this.add.image(300, 250, 'background');
    let storyObject = [
      {
        yValue: 50,
        text: 'Story Line',
        font: 36
      },
      {
        yValue: 100,
        text: 'The Shaolin Temple has been invaded by Ninja Assasins,',
        font: 20
      },
      {
        yValue: 140,
        text: 'a young Kung-fu Master escapes and is being chased.',
        font: 20
      },      {
        yValue: 180,
        text: 'The Ninja collects his dirts as he runs after the Master.',
        font: 20
      },      {
        yValue: 280,
        text: 'Game keyboard controls',
        font: 30
      },      {
        yValue: 320,
        text: 'Jump over platforms with the up arrow',
        font: 20
      },      {
        yValue: 360,
        text: 'Move with left and right arrows',
        font: 20
      }
    ]
    
    storyObject.forEach(element => {
      this.add.text(450, element.yValue, `${element.text}`, { fontSize: element.font }).setOrigin(0.5);
    })

    const hoverImage = this.add.image(100, 100, 'ninjaIcon').setDepth(1);
    hoverImage.setScale(0.15);
    hoverImage.setVisible(false);

    const playBtn = this.add.image(200, 520, 'play').setScale(0.4);

    playBtn.setInteractive();

    playBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = playBtn.x - 100;
      hoverImage.y = playBtn.y;
    });

    playBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    playBtn.on('pointerup', () => {
      this.scene.start('MainScene');
    });

    const menuBtn = this.add.image(700, 520, 'menu').setScale(0.4);

    menuBtn.setInteractive();

    menuBtn.on('pointerover', () => {
      hoverImage.setVisible(true);
      hoverImage.x = menuBtn.x - 100;
      hoverImage.y = menuBtn.y;
    });

    menuBtn.on('pointerout', () => {
      hoverImage.setVisible(false);
    });

    menuBtn.on('pointerup', () => {
      this.scene.start('MainMenu');
    });
  }
}

export default Instructions;