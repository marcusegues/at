import { OrderSide, OrderType } from '../../reducers/orders/types';
import { NewOrderState } from './OrdersTableContainer';
import { CurrencyPair } from '../../reducers/currencyPairs/types';

/*
 Test if a new order object is valid for submission
 */
export const isNewOrderValid = (newOrder: Partial<NewOrderState>, currencyPairs: CurrencyPair[]) => {
  const { pair, side, type, quantity, limit } = newOrder;
  const currencyPair = currencyPairs.find(cp => cp.pair === pair);
  if (
    (currencyPair &&
      side &&
      Object.values(OrderSide).includes(side) &&
      type &&
      type === OrderType.Market &&
      quantity &&
      typeof quantity === 'number' &&
      quantity >= currencyPair.minimumOrderSize &&
      quantity <= currencyPair.maximumOrderSize) ||
    (currencyPair &&
      side &&
      Object.values(OrderSide).includes(side) &&
      type &&
      type === OrderType.Limit &&
      limit &&
      typeof limit === 'number' &&
      quantity &&
      typeof quantity === 'number' &&
      quantity >= currencyPair.minimumOrderSize &&
      quantity <= currencyPair.maximumOrderSize)
  ) {
    return true;
  }

  return false;
};
