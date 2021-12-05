import { ignoreFile } from "./map-files";

test('ignoreFile', () => {
  expect(ignoreFile('/hello/world.js', [])).toBe(false);
  expect(ignoreFile('/hello/world.js', [
    new RegExp('/hello/world.js')
  ])).toBe(true);
  expect(ignoreFile('/hello/world.js', [
    new RegExp('/hello/.*.js')
  ])).toBe(true);
  expect(ignoreFile('/hello/world.js', [
    new RegExp('/hello/.*.js')
  ])).toBe(true);
  expect(ignoreFile('/hello/world.js', [
    new RegExp('/world.js')
  ])).toBe(false);
});
