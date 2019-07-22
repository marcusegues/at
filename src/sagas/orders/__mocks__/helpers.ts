import { NewOrderState } from '../../../components/OrdersTable/OrdersTableContainer';
import { Order } from '../../../reducers/orders/types';

const helpers: any = jest.genMockFromModule('../helpers');

export const MOCK_ID = 'test-id-09e26f6a-48cc-4754-bb54-22043adbe2ea';

helpers.addIdToOrder = (order: Omit<NewOrderState, 'id'>): Order =>
  ({
    ...order,
    id: MOCK_ID,
  } as Order);

export default helpers;
