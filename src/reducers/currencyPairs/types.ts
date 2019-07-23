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

export interface ByIdState {
  [currencyPairId: string]: CurrencyPair;
}

export interface CurrencyPairsState {
  byId: ByIdState;
  allIds: string[];
}
