export enum OrderSide {
  Buy = 'BUY',
  Sell = 'SELL',
}

export enum OrderType {
  Market = 'MARKET',
  Limit = 'LIMIT',
}

// property 'limit' mandatory if type is OrderType.Limit
export type Order =
  | {
      id: string;
      pair: string;
      side: OrderSide;
      type: OrderType.Market;
      quantity: number;
    }
  | {
      id: string;
      pair: string;
      side: OrderSide;
      type: OrderType.Limit;
      limit: number;
      quantity: number;
    };

export interface ByIdState {
  [orderId: string]: Order;
}

export interface OrdersState {
  byId: ByIdState;
  allIds: string[];
}
