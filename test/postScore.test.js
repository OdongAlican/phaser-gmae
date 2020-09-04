/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import 'babel-polyfill';
import { saveScores } from './mocks/mocker';

test('Check for correct data posted to the provided URL', async () => {
  const result = await saveScores();

  expect(result.user).toBe('TestUserTwo');
  expect(result.user).not.toBe('TestUser');
  expect(typeof saveScores()).toBe('object');
  expect(typeof saveScores()).not.toBe('string');
});
