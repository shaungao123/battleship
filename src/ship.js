export function createShip(length) {
    let hits = 0;
  
    return {
      get length() {
        return length;
      },
      get hits() {
        return hits;
      },
      hit() {
        hits++;
      },
      isSunk() {
        return hits >= length;
      }
    };
  }
  