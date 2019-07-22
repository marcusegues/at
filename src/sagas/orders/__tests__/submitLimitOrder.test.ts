import { receiveSuccessSubmitNewOrderAction, requestSubmitNewOrderAction } from '../../../actions/orders';
import { RequestSubmitNewOrderActionType } from '../../../actions/orders/types';
import { NewOrderState } from '../../../components/OrdersTable/OrdersTableContainer';
import { storeOrdersLocalStorage } from '../../../localStorage';
import { Order, OrderSide, OrderType } from '../../../reducers/orders/types';
import { getOrdersSelector } from '../../../reducers/selectors';
import { RootState } from '../../../reducers/types';
import { recordSaga } from '../../helpers';
import { MOCK_ID } from '../__mocks__/helpers';
import helpers from '../helpers';
import { submitNewOrderSaga } from '../orders';

const newLimitOrderFixture = (props?: Partial<NewOrderState>) => ({
  pair: 'eurusd',
  side: OrderSide.Buy,
  type: OrderType.Limit,
  limit: 5,
  quantity: 1,
  ...props,
});

const stateWithOrdersFixture = (): Pick<RootState, 'orders'> => ({
  orders: {
    allIds: [MOCK_ID],
    byId: {
      [MOCK_ID]: helpers.addIdToOrder(newLimitOrderFixture()) as Order,
    },
  },
});

// mock addIdToOrder so we can have a deterministic id in tests
jest.mock('../helpers');

// mock saving to localStorage
jest.mock('../../../localStorage');

describe('Submitting new market order', () => {
  const getState = () => stateWithOrdersFixture();
  test('fails if pair is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newLimitOrderFixture({ pair: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);
    console.log('STATE', getState());
    expect(dispatched).toEqual([]);
  });

  test('fails if side is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newLimitOrderFixture({ side: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if type is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newLimitOrderFixture({ type: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if quantity is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newLimitOrderFixture({ quantity: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if limit is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newLimitOrderFixture({ limit: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('succeeds if no fields are undefined', async () => {
    const order = newLimitOrderFixture();
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order,
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([receiveSuccessSubmitNewOrderAction({ order: helpers.addIdToOrder(order) })]);
    expect(storeOrdersLocalStorage).toHaveBeenCalledWith(getOrdersSelector(getState() as RootState));
  });
});
