import { receiveSuccessSubmitNewOrderAction, requestSubmitNewOrderAction } from '../../../actions/orders';
import { RequestSubmitNewOrderActionType } from '../../../actions/orders/types';
import { storeOrdersLocalStorage } from '../../../localStorage';
import { Order } from '../../../reducers/orders/types';
import { getOrdersSelector } from '../../../reducers/selectors';
import { RootState } from '../../../reducers/types';
import { getStateWithOrdersFixture, newMarketOrderFixture } from '../../../tests/fixtures/fixtures';
import { recordSaga } from '../../helpers';
import { MOCK_ID } from '../__mocks__/helpers';
import helpers from '../helpers';
import { submitNewOrderSaga } from '../orders';

const stateWithOrdersFixture = () =>
  getStateWithOrdersFixture([MOCK_ID], {
    [MOCK_ID]: helpers.addIdToOrder(newMarketOrderFixture()) as Order,
  });

// mock addIdToOrder so we can have a deterministic id in tests
jest.mock('../helpers');

// mock saving to localStorage
jest.mock('../../../localStorage');

describe('Submitting new market order', () => {
  const getState = () => stateWithOrdersFixture();
  test('fails if pair is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newMarketOrderFixture({ pair: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);
    expect(dispatched).toEqual([]);
  });

  test('fails if side is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newMarketOrderFixture({ side: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if type is undefined', async () => {
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order: newMarketOrderFixture({ type: undefined }),
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([]);
  });

  test('fails if quantity is undefined', async () => {
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

  test('succeeds if no fields are undefined', async () => {
    const order = newMarketOrderFixture();
    const action: RequestSubmitNewOrderActionType = requestSubmitNewOrderAction({
      order,
    });
    const dispatched = await recordSaga<Pick<RootState, 'orders'>>(submitNewOrderSaga, getState, action);

    expect(dispatched).toEqual([receiveSuccessSubmitNewOrderAction({ order: helpers.addIdToOrder(order) })]);
    expect(storeOrdersLocalStorage).toHaveBeenCalledWith(getOrdersSelector(getState() as RootState));
  });
});
