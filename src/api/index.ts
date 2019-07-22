import { camelizeKeys } from 'humps';

export class ApiRequestError extends Error {
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

export const getRequest = async <T>(path: string): Promise<T> => {
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
