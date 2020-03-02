import { timeout } from '../js/timeout.js';

describe('setTimeout test', () => {
  jest.useFakeTimers();

  test('waits 2 second before resolve it', async () => {
    const time = 2000;
    timeout(time);

    await expect(setTimeout).toHaveBeenCalledTimes(1);
    await expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), time);
  });
});
