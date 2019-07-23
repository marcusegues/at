import { Order } from '../reducers/orders/types';
import { StorageKeys } from './types';

const storeDataLocalStorage = (key: StorageKeys, value: any): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    // Todo: don't catch here, throw and let caller update redux state
    return false;
  }
};

const fetchGenericDataLocalStorage = (key: StorageKeys): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    // Todo: don't catch here, throw and let caller update redux state
    return null;
  }
};

const parser = (serialized: string, deserializer: (serialized: string) => any = s => JSON.parse(s)) =>
  deserializer(serialized);

export const fetchOrdersLocalStorage = (): Order[] => {
  const serialized = fetchGenericDataLocalStorage('orders');
  return serialized !== null ? parser(serialized) : [];
};

export const storeOrdersLocalStorage = (orders: Order[]): boolean => storeDataLocalStorage('orders', orders);
