import { root } from '../../reducers';

export const initialRootState = () => root(undefined, { type: '@@INIT' });
