import { getRequest } from './index';

export const requestGetCurrencyPairs = async () => getRequest('/v1/symbols_details');
