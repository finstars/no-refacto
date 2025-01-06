import { Incalculable, Money, TakeHomeCalculator } from './TakeHomeCalculator';

describe('TakeHomeCalculator', function () {
  it('can calculate tax', () => {
    // initiliase object
    // setTaxPercentage(10)
    // addCurrencyValues()
    // netAmount()

    let amount = new TakeHomeCalculator(10).netAmount(
      new Money(40, 'GBP'),
      new Money(50, 'GBP'),
      new Money(60, 'GBP')
    ).amount;

    expect(amount).toEqual(135);
  });

  it('cannot sum different currencies', () => {
    expect(() =>
      new TakeHomeCalculator(10).netAmount(
        new Money(40, 'GBP'),
        new Money(50, 'USD')
      )
    ).toThrow(Incalculable);
  });
});
