export default class Building {
  constructor(sqft = 0) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    console.log(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
