export type isRequesting = boolean;

export interface ApiRequestState {
  isRequesting: isRequesting;
  error: string | null;
}

export const initialApiRequestState: ApiRequestState = { isRequesting: false, error: null };

export interface ApiState {
  readonly fetchCurrencyPairs: ApiRequestState;
}
