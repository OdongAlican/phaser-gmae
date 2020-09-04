import 'jest-canvas-mock';
import Helper from '../src/helpers/helper';

window.score = 0;

test('update score', () => {
  Helper.updateScore('MainScene', 20);
  expect(window.score).toBe(20);
  expect(window.score).not.toBe(10);
});

test('checks the type of data as the score', () => {
  Helper.updateScore('MainScene', 320);
  expect(typeof window.score).toBe('number');
  expect(typeof window.score).not.toBe('object');
  expect(typeof window.score).not.toBe('string');
});

test('checks that there is always a score value', () => {
  Helper.updateScore('MainScene', 120);
  expect(window.score).not.toBe('');
});