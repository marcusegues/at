export const action = (type: string, payload?: any, error?: boolean) => ({
  type,
  payload,
  error: !!error,
});
