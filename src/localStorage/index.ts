import { Order } from '../reducers/orders/types';
import { StorageKeys } from './types';

const storeDataLocalStorage = (key: StorageKeys, value: any): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const fetchGenericDataLocalStorage = (key: StorageKeys): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log(error);
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
