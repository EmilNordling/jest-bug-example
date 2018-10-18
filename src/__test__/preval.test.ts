import greeting from '../preval';

test('basic', () => {
  expect(greeting).toBe('hello there!');
});
