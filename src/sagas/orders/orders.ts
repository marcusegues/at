import { call, put, select } from 'redux-saga/effects';
import { receiveSuccessFetchOrdersAction, receiveSuccessSubmitNewOrderAction } from '../../actions/orders';
import { RequestSubmitNewOrderActionType } from '../../actions/orders/types';
import { fetchOrdersLocalStorage, storeOrdersLocalStorage } from '../../localStorage';
import { OrderType } from '../../reducers/orders/types';
import { getOrdersSelector } from '../../reducers/selectors';
import helpers from './helpers';

export function* fetchOrdersLocalStorageSaga() {
  try {
    const orders = yield call(fetchOrdersLocalStorage);
    yield put(receiveSuccessFetchOrdersAction({ orders }));
  } catch (error) {
    // Todo: analogous to fetchCurrencyPairsSaga
  } finally {
    // Todo: analogous to fetchCurrencyPairsSaga
  }
}

export function* submitNewOrderSaga({ payload: { order } }: RequestSubmitNewOrderActionType) {
  try {
    const { pair, side, type, quantity, limit } = order;
    // only process order if fields are validated
    if (
      (pair && side && type === OrderType.Market && quantity && limit === undefined) ||
      (pair && side && type === OrderType.Limit && limit && quantity)
    ) {
      // normally we would post the new order to the backend here using external function
      // instead, we delegate to helper function so we can still test

      const newOrder = helpers.addIdToOrder(order);

      // save to redux
      yield put(receiveSuccessSubmitNewOrderAction({ order: newOrder }));

      // save to localStorage
      const orders = yield select(getOrdersSelector);
      storeOrdersLocalStorage(orders);
    }
  } catch (error) {
    // Todo: analogous to fetchCurrencyPairsSaga
  } finally {
    // Todo: analogous to fetchCurrencyPairsSaga
  }
}
