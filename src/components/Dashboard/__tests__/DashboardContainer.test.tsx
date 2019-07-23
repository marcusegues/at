import { shallow } from 'enzyme';
import React from 'react';
import { DashboardContainer } from '../DashboardContainer';
import { DashBoardContainerInner } from '../DashboardContainer';

describe('DashboardContainer', () => {
  const onFetchCurrencyPairsMock = jest.fn();
  const onFetchOrdersMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  // This test should actually be implemented using Enzyme's mount or react-test-renderer create, however
  // ag-grid presents some issues (tracked in their repo) that need workarounds, and I am not including the latter here
  // the below test is not ideal because I am mocking what the connected component would get from react-redux, which
  // is defined in the component itself: this represents a decoupling between implementation and tests which should
  // definitely be solved when the ag-grid workarounds are in place
  test('calls passed in actions', () => {
    shallow(
      <DashBoardContainerInner
        onFetchCurrencyPairs={onFetchCurrencyPairsMock}
        onFetchOrders={onFetchOrdersMock}
      />
    );

    expect(onFetchCurrencyPairsMock).toHaveBeenCalled();
    expect(onFetchOrdersMock).toHaveBeenCalled();
  });

  test('calls passed in actions', () => {
    const component = shallow(
      <DashBoardContainerInner
        onFetchCurrencyPairs={onFetchCurrencyPairsMock}
        onFetchOrders={onFetchOrdersMock}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
