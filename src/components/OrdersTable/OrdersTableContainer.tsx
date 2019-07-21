import React, { Component, Dispatch } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { Order, OrderType } from '../../reducers/orders/types';
import { getOrdersSelector } from '../../selectors';

interface OwnProps {}

interface StateProps {
  orders: Order[];
}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

interface Column {
  headerName: string;
  field: string;
}

interface State {
  columns: Column[];
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
  };
  public render() {
    return (
      <div style={{ height: '150px', width: '600px' }} className="ag-theme-balham">
        <AgGridReact columnDefs={this.state.columns} rowData={this.props.orders} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  orders: getOrdersSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<CurrencyPairsActionTypes>) => ({});

export const OrdersTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersTableContainerInner);
