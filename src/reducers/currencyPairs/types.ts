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

export interface ByIdState {
  [currencyPair: string]: CurrencyPair;
}

export interface CurrencyPairsState {
  byId: ByIdState;
  allIds: string[];
}
