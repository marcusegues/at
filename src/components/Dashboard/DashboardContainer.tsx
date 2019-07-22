import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { requestFetchOrdersAction } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { Order } from '../../reducers/orders/types';
import { RootState } from '../../reducers/types';
import { OrdersTableContainer } from '../OrdersTable/OrdersTableContainer';

interface StateProps {
  orders: Order[];
}

interface DispatchProps {
  onFetchCurrencyPairs: () => void;
  onFetchOrders: () => void;
}

type Props = StateProps & DispatchProps;

class DashBoardContainerInner extends Component<Props> {
  public state = {};

  public async componentDidMount() {
    this.props.onFetchCurrencyPairs();
    this.props.onFetchOrders();
  }

  public render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 20,
          marginRight: 20,
          width: 620,
        }}
      >
        <OrdersTableContainer />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<CurrencyPairsActionTypes | OrdersActionTypes>) => ({
  onFetchCurrencyPairs: () => dispatch({ type: REQUEST_FETCH_CURRENCY_PAIRS }),
  onFetchOrders: () => dispatch(requestFetchOrdersAction()),
});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainerInner);
