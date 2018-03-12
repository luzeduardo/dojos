import { factorial } from './memoize';

it('factorial test 1', () => {
  expect(factorial(1)).toEqual(1);
});

it('factorial test 2', () => {
  expect(factorial(2)).toEqual(2);
});

it('factorial test 5', () => {
  expect(factorial(4)).toEqual(24);
});
