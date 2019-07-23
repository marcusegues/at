import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';
import produce from 'immer';
import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import { requestSubmitNewOrderAction } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { Order, OrderSide, OrderType } from '../../reducers/orders/types';
import { getCurrencyPairsSelector, getOrdersSelector } from '../../reducers/selectors';
import { RootState } from '../../reducers/types';
import { NewOrderEntry } from './NewOrderEntry/NewOrderEntry';
import { OrdersTable } from './OrdersTable';

interface StateProps {
  orders: Order[];
  currencyPairs: CurrencyPair[];
}

interface DispatchProps {
  onSubmitNewOrder: (order: NewOrderState) => void;
}

type Props = StateProps & DispatchProps;

interface Column {
  headerName: string;
  field: string;
}

export interface NewOrderState {
  pair?: string;
  side: OrderSide;
  type: OrderType;
  quantity?: number;
  limit?: number;
}

interface State {
  columns: Column[];
  newOrder: NewOrderState;
}

const initialNewOrder = () => ({
  pair: undefined,
  side: OrderSide.Buy,
  type: OrderType.Market,
  quantity: undefined,
  limit: undefined,
});

class OrdersTableContainerInner extends Component<Props, State> {
  public state = {
    columns: [
      { headerName: 'Symbol', field: 'pair', width: 124 },
      { headerName: 'Side', field: 'side', width: 124 },
      { headerName: 'Quantity', field: 'quantity', width: 124 },
      { headerName: 'Limit', field: 'limit', width: 124 },
      { headerName: 'Status', field: 'status', width: 124 },
    ],
    newOrder: initialNewOrder(),
  };

  public onSelectCurrencyPair = (pair: string) => {
    this.setState(
      produce(draft => {
        draft.newOrder.pair = pair;
      })
    );
  };

  public onSelectSide = (side: OrderSide) => {
    console.log('SIDE', side);
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
        if (type === OrderType.Market) {
          draft.newOrder.limit = undefined;
        }
      })
    );
  };

  public onSelectQuantity = (quantity: number | undefined) => {
    this.setState(
      produce(draft => {
        draft.newOrder.quantity = quantity;
      })
    );
  };

  public onSelectLimit = (limit: number | undefined) => {
    this.setState(
      produce(draft => {
        draft.newOrder.limit = limit;
      })
    );
  };

  public onSubmitNewOrder = () => {
    this.props.onSubmitNewOrder(this.state.newOrder);
    this.setState(
      produce(draft => {
        draft.newOrder = initialNewOrder();
      })
    );
  };

  public render() {
    console.log('Render Orders Container', this.props);
    const { orders, currencyPairs } = this.props;
    return (
      <>
        <NewOrderEntry
          orderCount={orders.length}
          currencyPairs={currencyPairs}
          onSelectCurrencyPair={this.onSelectCurrencyPair}
          onSelectSide={this.onSelectSide}
          onSelectType={this.onSelectType}
          onSelectQuantity={this.onSelectQuantity}
          onSelectLimit={this.onSelectLimit}
          newOrder={this.state.newOrder}
          onSubmitNewOrder={this.onSubmitNewOrder}
        />
        <OrdersTable columns={this.state.columns} rows={orders} />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  orders: getOrdersSelector(state),
  currencyPairs: getCurrencyPairsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<OrdersActionTypes>) => ({
  onSubmitNewOrder: (order: NewOrderState) => dispatch(requestSubmitNewOrderAction({ order })),
});

export const OrdersTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersTableContainerInner);
