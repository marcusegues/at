import { isNewOrderValid } from '../helpers';
import {
  currencyPairsFixture,
  newLimitOrderFixture,
  newMarketOrderFixture,
  PAIR_MAXIMUM_ORDER_SIZE,
} from '../../../tests/fixtures';

describe('isNewOrderValid with market order', () => {
  const currencyPairs = currencyPairsFixture();
  test('succeeds with correct arguments (market order fixture)', () => {
    expect(isNewOrderValid(newMarketOrderFixture(), currencyPairs)).toBe(true);
  });
  test('fails if side is of incorrect type', () => {
    // We need to ts-ignore because we want to pass in the wrong argument types to isNewOrderValid
    expect(isNewOrderValid(newMarketOrderFixture({ side: undefined }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: null }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: 'string' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: '' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: 5 }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: {} }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: [] }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: true }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ side: false }), currencyPairs)).toBe(false);
  });
  test('fails if type is of incorrect type', () => {
    // We need to ts-ignore because we want to pass in the wrong argument types to isNewOrderValid
    expect(isNewOrderValid(newMarketOrderFixture({ type: undefined }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: null }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: 'string' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: '' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: 5 }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: {} }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: [] }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: true }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ type: false }), currencyPairs)).toBe(false);
  });
  test('fails if quantity is of incorrect type', () => {
    // We need to ts-ignore because we want to pass in the wrong argument types to isNewOrderValid
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: undefined }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: null }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: 'string' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: '' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: {} }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: [] }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: true }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: false }), currencyPairs)).toBe(false);
  });
  test('fails if quantity smaller than minimum order size for currency pair', () => {
    expect(isNewOrderValid(newMarketOrderFixture({ quantity: 5 }), currencyPairs)).toBe(false);
  });
  test('fails if quantity larger than maximum order size for currency pair', () => {
    expect(
      isNewOrderValid(newMarketOrderFixture({ quantity: PAIR_MAXIMUM_ORDER_SIZE + 1 }), currencyPairs)
    ).toBe(false);
  });
});

describe('isNewOrderValid with limit order', () => {
  const currencyPairs = currencyPairsFixture();
  test('succeeds with correct arguments (limit order fixture)', () => {
    expect(isNewOrderValid(newLimitOrderFixture(), currencyPairs)).toBe(true);
  });
  test('fails if side is of incorrect type', () => {
    // We need to ts-ignore because we want to pass in the wrong argument types to isNewOrderValid
    expect(isNewOrderValid(newLimitOrderFixture({ side: undefined }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: null }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: 'string' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: '' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: 5 }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: {} }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: [] }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: true }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ side: false }), currencyPairs)).toBe(false);
  });
  test('fails if type is of incorrect type', () => {
    // We need to ts-ignore because we want to pass in the wrong argument types to isNewOrderValid
    expect(isNewOrderValid(newLimitOrderFixture({ type: undefined }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: null }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: 'string' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: '' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: 5 }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: {} }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: [] }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: true }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ type: false }), currencyPairs)).toBe(false);
  });
  test('fails if quantity is of incorrect type', () => {
    // We need to ts-ignore because we want to pass in the wrong argument types to isNewOrderValid
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: undefined }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: null }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: 'string' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: '' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: {} }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: [] }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: true }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: false }), currencyPairs)).toBe(false);
  });
  test('fails if limit is of incorrect type', () => {
    // We need to ts-ignore because we want to pass in the wrong argument types to isNewOrderValid
    expect(isNewOrderValid(newLimitOrderFixture({ limit: undefined }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ limit: null }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ limit: 'string' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ limit: '' }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ limit: {} }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ limit: [] }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ limit: true }), currencyPairs)).toBe(false);
    // @ts-ignore
    expect(isNewOrderValid(newLimitOrderFixture({ limit: false }), currencyPairs)).toBe(false);
  });
  test('fails if quantity smaller than minimum order size for currency pair', () => {
    expect(isNewOrderValid(newLimitOrderFixture({ quantity: 5 }), currencyPairs)).toBe(false);
  });
  test('fails if quantity larger than maximum order size for currency pair', () => {
    expect(
      isNewOrderValid(newLimitOrderFixture({ quantity: PAIR_MAXIMUM_ORDER_SIZE + 1 }), currencyPairs)
    ).toBe(false);
  });
});
