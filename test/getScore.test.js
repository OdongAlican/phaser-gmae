/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import { getScores } from './mocks/mocker';

test('The method is able to fetch correct user name from the provided URL', async () => {
  const result = await getScores();

  expect(result.user).toBe('TestUserOne');
  expect(result.user).not.toBe('TestUser');
});

test('The method is able to fetch correct user scores from the provided URL', async () => {
  const result = await getScores();

  expect(result.score).toEqual(200);
  expect(result.score).not.toEqual(20);
});

test('Displays the return type of the recieved data', async () => {
  const result = await getScores();

  expect(typeof getScores()).toBe('object');
  expect(typeof getScores()).not.toBe('string');
});