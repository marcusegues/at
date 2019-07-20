export interface CurrencyPair {
  pair: string;
  pricePrecision: number;
  initialMargin: string;
  minimumMargin: string;
  maximumOrderSize: string;
  minimumOrderSize: string;
  expiration: string;
  margin: boolean;
}
export interface CurrencyPairsState {
  [currencyPair: string]: CurrencyPair;
}
