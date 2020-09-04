/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */

import 'babel-polyfill';
import { saveScores } from './mocks/mocker';

test('Check for correct data posted to the provided URL', async () => {
  const result = await saveScores();

  expect(result.user).toBe('TestUserTwo');
  expect(result.score).toBe(20);
  expect(result.score).not.toEqual(201);
  expect(result.user).not.toBe('TestUser');
});


test('Check for correct data  type posted to the provided URL', async () => {
  const result = await saveScores();

  expect(typeof saveScores()).toBe('object');
  expect(typeof saveScores()).not.toBe('string');
  expect(typeof saveScores()).not.toBe('float');
  expect(typeof saveScores()).not.toBe('number');
});

test('Check for data availability posted to the provided URL', async () => {
  const result = await saveScores();

  expect(result.user).not.toEqual('');
  expect(result.score).not.toEqual('');
});