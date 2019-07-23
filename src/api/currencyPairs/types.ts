export interface CurrencyPairDto {
  pair: string;
  pricePrecision: number;
  initialMargin: string;
  minimumMargin: string;
  maximumOrderSize: string;
  minimumOrderSize: string;
  expiration: string;
  margin: boolean;
}
