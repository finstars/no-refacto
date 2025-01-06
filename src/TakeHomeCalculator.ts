export class TakeHomeCalculator {
  private readonly percent: number;

  constructor(percent: number) {
    this.percent = percent;
  }
  
  netAmount(
    first: Money,
    ...rest: Money[]
  ): Money {
    let pairs: Money[] = Array.from(rest);

    let total: Money = first;

    for (let next of pairs) {
      if (next.currency != total.currency) {
        throw new Incalculable("Cannot sum different currencies");
      }

      total = new Money(total.amount + next.amount, next.currency);
    }

    let amount: number = total.amount * (this.percent / 100);
    let tax = new Money(amount, first.currency);

    return new Money(total.amount - tax.amount, first.currency);
  }
}

export class Money {
  amount: number;
  currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }
}

export class Incalculable extends Error {}
