import * as currencyPairsSelectors from './currencyPairs/selectors';
import { CurrencyPair } from './currencyPairs/types';
import * as ordersSelectors from './orders/selectors';
import { Order } from './orders/types';
import { RootState } from './types';

export const getOrdersSelector = (state: RootState): Order[] => ordersSelectors.getOrders(state.orders);

export const getCurrencyPairs = (state: RootState): CurrencyPair[] =>
  currencyPairsSelectors.getCurrencyPairs(state.currencyPairs);
