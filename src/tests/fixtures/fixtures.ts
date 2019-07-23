import { NewOrderState } from '../../components/OrdersTable/OrdersTableContainer';
import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { Order, OrdersByIdState, OrderSide, OrderType } from '../../reducers/orders/types';
import { RootState } from '../../reducers/types';
import { MOCK_ID } from '../../sagas/orders/__mocks__/helpers';
import helpers from '../../sagas/orders/helpers';

export const PAIR_ID = 'iotbtc';

export const PAIR_MAXIMUM_ORDER_SIZE = 100000;

export const newMarketOrderFixture = (props?: Partial<NewOrderState>) => ({
  pair: PAIR_ID,
  side: OrderSide.Buy,
  type: OrderType.Market,
  quantity: 15,
  ...props,
});

export const newLimitOrderFixture = (props?: Partial<NewOrderState>) => ({
  pair: PAIR_ID,
  side: OrderSide.Buy,
  type: OrderType.Limit,
  limit: 5,
  quantity: 15,
  ...props,
});

export const currencyPairsFixture = (): CurrencyPair[] => [
  {
    pair: 'btcusd',
    pricePrecision: 5,
    initialMargin: '30.0',
    minimumMargin: '15.0',
    maximumOrderSize: 2000,
    minimumOrderSize: 0,
    expiration: 'NA',
    margin: true,
  },
  {
    pair: 'ltcusd',
    pricePrecision: 5,
    initialMargin: '30.0',
    minimumMargin: '15.0',
    maximumOrderSize: 5000,
    minimumOrderSize: 0,
    expiration: 'NA',
    margin: true,
  },
  {
    pair: 'ltcbtc',
    pricePrecision: 5,
    initialMargin: '30.0',
    minimumMargin: '15.0',
    maximumOrderSize: 5000,
    minimumOrderSize: 0,
    expiration: 'NA',
    margin: true,
  },
  {
    pair: 'ethusd',
    pricePrecision: 5,
    initialMargin: '30.0',
    minimumMargin: '15.0',
    maximumOrderSize: 5000,
    minimumOrderSize: 0,
    expiration: 'NA',
    margin: true,
  },
  {
    pair: 'xrpbtc',
    pricePrecision: 5,
    initialMargin: '30.0',
    minimumMargin: '15.0',
    maximumOrderSize: 200000,
    minimumOrderSize: 10,
    expiration: 'NA',
    margin: true,
  },
  {
    pair: 'iotusd',
    pricePrecision: 5,
    initialMargin: '30.0',
    minimumMargin: '15.0',
    maximumOrderSize: 100000,
    minimumOrderSize: 10,
    expiration: 'NA',
    margin: true,
  },
  {
    pair: 'iotbtc',
    pricePrecision: 5,
    initialMargin: '30.0',
    minimumMargin: '15.0',
    maximumOrderSize: 100000,
    minimumOrderSize: 10,
    expiration: 'NA',
    margin: true,
  },
];

export const getStateWithOrdersFixture = (
  allIds: string[],
  byId: OrdersByIdState
): Pick<RootState, 'orders'> => ({
  orders: {
    allIds,
    byId,
  },
});
