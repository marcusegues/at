import { camelizeKeys } from 'humps';
import produce from 'immer';
import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { CurrencyPairDto } from './types';

class ApiRequestError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
    this.name = 'ApiRequestError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiRequestError);
    }
  }
}

const getRequest = async <T>(path: string): Promise<T> => {
  const response = await fetch(
    // in development we are using webpack-dev-server to proxy our request to avoid CORS
    `${process.env.NODE_ENV === 'development' ? '' : process.env.REACT_APP_BASE_URL}${path}`,
    {
      headers: { accept: 'application/json' },
    }
  );

  if (response.ok) {
    // Type assertion because camelizeKeys returns Object
    return camelizeKeys(await response.json()) as T;
  }

  throw new ApiRequestError(response.status, response.statusText);
};
export const requestGetCurrencyPairs = async () => {
  const unparsed = await getRequest<CurrencyPairDto[]>('/v1/symbols_details');
  return unparsed.map(cp => ({
    ...cp,
    minimumOrderSize: parseInt(cp.minimumOrderSize, 10),
    maximumOrderSize: parseInt(cp.maximumOrderSize, 10),
  }));
};
