// test helpers
import { AnyAction } from 'redux';
import { runSaga, Saga } from 'redux-saga';

export interface Action {
  type: string;
  payload?: any;
  error?: boolean;
}

export async function recordSaga<S>(saga: Saga, getState: () => S, initialAction: AnyAction) {
  const dispatched: Action[] = [];

  await runSaga<AnyAction, S, Saga>(
    {
      dispatch: (action: Action) => dispatched.push(action),
      getState,
    },
    saga,
    initialAction
  ).toPromise();

  return dispatched;
}
