export interface CurrencyPair {
  pair: string;
  pricePrecision: number;
  initialMargin: string;
  minimumMargin: string;
  maximumOrderSize: number;
  minimumOrderSize: number;
  expiration: string;
  margin: boolean;
}

export interface CurrencyPairsByIdState {
  [currencyPairId: string]: CurrencyPair;
}

export interface CurrencyPairsState {
  byId: CurrencyPairsByIdState;
  allIds: string[];
}
