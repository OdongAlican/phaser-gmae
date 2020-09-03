import 'jest-canvas-mock';
import Helper from '../src/helpers/helper';

window.score = 0;

test('update score', () => {
  Helper.updateScore('MainScene', 20);
  expect(window.score).toBe(20);
  expect(window.score).not.toBe(10);
});