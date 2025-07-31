import { createShip } from './ship.js';

test('ship tracks hits correctly', () => {
  const ship = createShip(2);
  expect(ship.hits).toBe(0);
  ship.hit();
  expect(ship.hits).toBe(1);
  ship.hit();
  expect(ship.hits).toBe(2);
});

test('ship sinks when hit count reaches length', () => {
  const ship = createShip(2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('ship does not sink before full damage', () => {
  const ship = createShip(4);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
