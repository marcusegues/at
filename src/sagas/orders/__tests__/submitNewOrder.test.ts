import { AnyAction } from 'redux';
import { runSaga, Saga } from 'redux-saga';
import { v4 } from 'uuid';
import { receiveSuccessSubmitNewOrderAction, requestSubmitNewOrderAction } from '../../../actions/orders';
import { RequestSubmitNewOrderActionType } from '../../../actions/orders/types';
import { NewOrderState } from '../../../components/OrdersTable/OrdersTableContainer';
import { Order, OrderSide, OrderType } from '../../../reducers/orders/types';
import { RootState } from '../../../reducers/types';
import { submitNewOrderSaga } from '../orders';

interface Action {
  type: string;
  payload?: any;
  error?: boolean;
}

export async function recordSaga<S>(saga: Saga, getState: () => S, initialAction: AnyAction) {
  const dispatched: Action[] = [];

  await runSaga<AnyAction, S, Saga>(
    {
      dispatch: (action: Action) => dispatched.push(action),
      getState,
    },
    saga,
    initialAction
  ).toPromise();

  return dispatched;
}

const newMarketOrderFixture = (props?: Partial<NewOrderState>) => ({
  pair: 'eurusd',
  side: OrderSide.Buy,
  type: OrderType.Market,
  quantity: 1,
  ...props,
});

const stateWithOrdersFixture = (): Pick<RootState, 'orders'> => {
  const id = v4();
  return {
    orders: {
      allIds: [id],
      byId: {
        [id]: addIdToOrder(newMarketOrderFixture()) as Order,
      },
    },
  };
};

// mock addIdToOrder so we can have a deterministic id in tests
import { addIdToOrder } from '../helpers';

jest.mock('../helpers', () => ({
  __esModule: true,
  addIdToOrder: (order: Omit<NewOrderState, 'id'>): Order =>
    ({
      ...order,
      id: 'test-id-09e26f6a-48cc-4754-bb54-22043adbe2ea',
    } as Order),
}));

import { storeOrdersLocalStorage } from '../../../localStorage';
import { getOrdersSelector } from '../../../reducers/selectors';
// mock saving to localStorage

jest.mock('../../../localStorage');

describe('Submitting new market order', () => {
  const getState = () => stateWithOrdersFixture();
  test('fails if pair is invalid', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newMarketOrderFixture({ pair: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if side is invalid', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newMarketOrderFixture({ side: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if type is invalid', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newMarketOrderFixture({ type: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if quantity is invalid', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newMarketOrderFixture({ quantity: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if all fields valid but limit field present', async () => {
    const order = newMarketOrderFixture({ limit: 5 });
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order,
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('succeeds if all fields valid', async () => {
    const order = newMarketOrderFixture();
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order,
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([receiveSuccessSubmitNewOrderAction({ order: addIdToOrder(order) })]);
    expect(storeOrdersLocalStorage).toHaveBeenCalledWith(getOrdersSelector(getState() as RootState));
  });
});
