export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](value) {
    if (typeof value === 'number') {
      return this._size;
    }
    if (typeof value === 'string') {
      return this._location;
    }
  }
}
