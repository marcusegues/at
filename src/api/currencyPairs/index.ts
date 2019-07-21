import { getRequest } from '../index';
import { CurrencyPair } from '../../reducers/currencyPairs/types';

export const requestGetCurrencyPairs = async () => getRequest<CurrencyPair[]>('/v1/symbols_details');
