import { getRequest } from '../index';
import { CurrencyPairDto } from './types';

export const requestGetCurrencyPairs = async () => getRequest<CurrencyPairDto[]>('/v1/symbols_details');
