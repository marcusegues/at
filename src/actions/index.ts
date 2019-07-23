export const action = (type: string, payload?: any, error?: boolean) => ({
  type,
  payload,
  error: !!error,
});

export const IS_REQUESTING = 'IS_REQUESTING_';
export const RECEIVE_ERROR = 'RECEIVE_ERROR_';
