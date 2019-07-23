import { combineReducers } from 'redux';
import { createApiRequestReducer } from './createApiRequestReducer';
import { ApiState } from './types';
import { FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';

export const api = combineReducers<ApiState>({
  fetchCurrencyPairs: createApiRequestReducer(FETCH_CURRENCY_PAIRS),
});
