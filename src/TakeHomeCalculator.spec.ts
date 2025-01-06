import { Incalculable, Money, TakeHomeCalculator } from './TakeHomeCalculator';

describe('TakeHomeCalculator', function () {
  it('can calculate tax', () => {
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

  it('calculate tax', () => {
    let amount = new TakeHomeCalculator(10).netAmount(
      new Money(40, 'USD')
    ).amount;

    expect(amount).toEqual(36);
  });

  it('calculate tax out of one value passed', () => {
    let amount = new TakeHomeCalculator(10).netAmount(
      new Money(40, 'USD')
    ).amount;

    expect(amount).toEqual(36);
  });
});
