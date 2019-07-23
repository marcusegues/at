export enum OrderSide {
  Buy = 'BUY',
  Sell = 'SELL',
}

export enum OrderType {
  Market = 'MARKET',
  Limit = 'LIMIT',
}

export interface MarketOrder {
  id: string;
  pair: string;
  side: OrderSide;
  type: OrderType.Market;
  quantity: number;
}

export interface LimitOrder {
  id: string;
  pair: string;
  side: OrderSide;
  type: OrderType.Limit;
  limit: number;
  quantity: number;
}

// property 'limit' mandatory if type is OrderType.Limit
export type Order = MarketOrder | LimitOrder;

export interface OrdersByIdState {
  [orderId: string]: Order;
}

export interface OrdersState {
  byId: OrdersByIdState;
  allIds: string[];
}
