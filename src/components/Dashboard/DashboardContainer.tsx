import React, { Dispatch, PureComponent } from 'react';
import { connect } from 'react-redux';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { RootState } from '../../reducers/types';
import { OrdersTableContainer } from '../OrdersTable/OrdersTableContainer';

class DashBoardContainerInner extends PureComponent {
  public state = {};

  public async componentDidMount() {}

  public render() {
    return (
      <div>
        <OrdersTableContainer />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<CurrencyPairsActionTypes>) => ({
  fetchCurrencyPairs: dispatch({ type: REQUEST_FETCH_CURRENCY_PAIRS }),
});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainerInner);
