import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import produce from 'immer';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { REQUEST_NEW_ORDER } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { Order, OrderSide, OrderType } from '../../reducers/orders/types';
import { getCurrencyPairs, getOrdersSelector } from '../../reducers/selectors';
import { RootState } from '../../reducers/types';
import { NewOrderEntry } from './NewOrderEntry/NewOrderEntry';

interface OwnProps {}

interface StateProps {
  orders: Order[];
  currencyPairs: () => CurrencyPair[];
}

interface DispatchProps {
  onNewOrder: (order: Order) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface Column {
  headerName: string;
  field: string;
}

export interface NewOrder {
  pair?: string;
  side: OrderSide;
  type: OrderType;
  quantity?: number;
  limit?: number;
}

interface State {
  columns: Column[];
  newOrder: NewOrder;
}

class OrdersTableContainerInner extends Component<Props, State> {
  public state = {
    columns: [
      { headerName: 'Symbol', field: 'pair' },
      { headerName: 'Side', field: 'side' },
      { headerName: 'Quantity', field: 'quantity' },
      { headerName: 'Limit', field: 'limit' },
      { headerName: 'Status', field: 'status' },
    ],
    newOrder: {
      pair: undefined,
      side: OrderSide.Buy,
      type: OrderType.Market,
      quantity: undefined,
      limit: undefined,
    },
  };

  public onSelectCurrencyPair = (pair: string) => {
    this.setState(
      produce(draft => {
        draft.newOrder.pair = pair;
      })
    );
  };

  public onSelectSide = (side: OrderSide) => {
    this.setState(
      produce(draft => {
        draft.newOrder.side = side;
      })
    );
  };

  public onSelectType = (type: OrderType) => {
    this.setState(
      produce(draft => {
        draft.newOrder.type = type;
      })
    );
  };

  public render() {
    console.log('render', this.props);
    const { orders, currencyPairs } = this.props;
    return (
      <div style={{ width: '100%', height: 500 }} className="ag-theme-balham">
        <NewOrderEntry
          orderCount={orders.length}
          currencyPairs={currencyPairs()}
          onSelectCurrencyPair={this.onSelectCurrencyPair}
          onSelectSide={this.onSelectSide}
          onSelectType={this.onSelectType}
          newOrder={this.state.newOrder}
        />
        <AgGridReact columnDefs={this.state.columns} rowData={orders} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  orders: getOrdersSelector(state),
  currencyPairs: () => getCurrencyPairs(state),
});

const mapDispatchToProps = (dispatch: Dispatch<OrdersActionTypes>) => ({
  onNewOrder: (order: Order) => dispatch({ type: REQUEST_NEW_ORDER, payload: { order } }),
});

export const OrdersTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersTableContainerInner);
