import { CurrencyPairsState } from './currencyPairs/types';
import { OrdersState } from './orders/types';
import { ApiState } from './api/types';

export interface RootState {
  api: ApiState;
  currencyPairs: CurrencyPairsState;
  orders: OrdersState;
}
