import Validator from '../index';

test.each([
  ['Gh-o111___s111t', true],
  ['Gh -@o111___st', false],
  ['Gh1111st', false],
  ['1Ghost', false],
  ['Ghost1', false],
  ['_Ghost', false],
  ['Ghost_', false],
  ['-Ghost', false],
  ['Ghost-', false],
])('testing working status of Validator class', (imported, expected) => {
  const validator = new Validator();
  expect(validator.validateUsername(imported)).toBe(expected);
});
