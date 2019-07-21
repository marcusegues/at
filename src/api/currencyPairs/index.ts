import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { getRequest } from '../index';

export const requestGetCurrencyPairs = async () => getRequest<CurrencyPair[]>('/v1/symbols_details');
