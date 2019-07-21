import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { RECEIVE_SUCCESS_FETCH_ORDERS } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { Order } from '../../reducers/orders/types';
import { RootState } from '../../reducers/types';
import { OrdersTableContainer } from '../OrdersTable/OrdersTableContainer';

interface OwnProps {}

interface StateProps {
  orders: Order[];
}

interface DispatchProps {
  onFetchCurrencyPairs: () => void;
  onReceiveOrders: (orders: Order[]) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class DashBoardContainerInner extends Component<Props> {
  public state = {};

  public async componentDidMount() {
    this.props.onFetchCurrencyPairs();
    const ordersJSON = localStorage.getItem('orders');
    const orders = ordersJSON && (await JSON.parse(ordersJSON));
    console.log(orders);
    this.props.onReceiveOrders(orders);
  }

  public render() {
    return (
      <div>
        <OrdersTableContainer />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<CurrencyPairsActionTypes | OrdersActionTypes>) => ({
  onFetchCurrencyPairs: () => dispatch({ type: REQUEST_FETCH_CURRENCY_PAIRS }),
  onReceiveOrders: (orders: Order[]) => dispatch({ type: RECEIVE_SUCCESS_FETCH_ORDERS, payload: { orders } }),
});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainerInner);
