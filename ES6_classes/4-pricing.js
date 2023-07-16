import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency = new Currency()) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }
  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }
  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency} ${this.currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
