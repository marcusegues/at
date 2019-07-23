import produce from 'immer';
import { IS_REQUESTING, RECEIVE_ERROR } from '../../actions';
import { ApiReceiveErrorActionType } from '../../actions/api/fetchCurrencyPairs/types';
import { ApiRequestState, initialApiRequestState } from './types';
import { ApiActionType, ApiIsRequestingActionType } from '../../actions/api/fetchCurrencyPairs/types';

export const createApiRequestReducer = (name: string) => (
  state: ApiRequestState = initialApiRequestState,
  action: ApiActionType
) =>
  produce(state, draft => {
    switch (action.type) {
      case `${IS_REQUESTING}${name}`: {
        draft.isRequesting = (action as ApiIsRequestingActionType).payload.isRequesting;
        return draft;
      }
      case `${RECEIVE_ERROR}${name}`: {
        draft.isRequesting = false;
        draft.error = (action as ApiReceiveErrorActionType).payload.error;
        return draft;
      }
    }
  });
