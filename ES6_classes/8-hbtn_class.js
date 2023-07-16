export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](value) {
    if (typeof value === 'number') {
      return this._size;
    } else if (typeof value === 'string') {
      return this._location;
    } else {
      return;
    }
  }
}
