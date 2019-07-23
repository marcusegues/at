import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { requestFetchOrdersAction } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { OrdersTableContainer } from '../OrdersTable/OrdersTableContainer';

interface DispatchProps {
  onFetchCurrencyPairs: () => void;
  onFetchOrders: () => void;
}

type Props = DispatchProps;

export class DashBoardContainerInner extends Component<Props> {
  public state = {};

  public async componentDidMount() {
    this.props.onFetchCurrencyPairs();
    this.props.onFetchOrders();
  }

  public render() {
    return (
      <Container>
        <OrdersTableContainer />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  width: 620px;
`;

const mapDispatchToProps = (dispatch: Dispatch<CurrencyPairsActionTypes | OrdersActionTypes>) => ({
  onFetchCurrencyPairs: () => dispatch({ type: REQUEST_FETCH_CURRENCY_PAIRS }),
  onFetchOrders: () => dispatch(requestFetchOrdersAction()),
});

export const DashboardContainer = connect(
  null,
  mapDispatchToProps
)(DashBoardContainerInner);
