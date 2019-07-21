import { CurrencyPairsState } from './currencyPairs/types';
import { OrdersState } from './orders/types';

export interface RootState {
  currencyPairs: CurrencyPairsState;
  orders: OrdersState;
}
