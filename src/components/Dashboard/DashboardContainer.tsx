import React, { Dispatch, PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { Button } from 'antd';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class DashBoardContainerInner extends PureComponent<Props, State> {
  public state = {};

  async componentDidMount() {}

  public render() {
    return (
      <div>
        Hello <Button type="primary">Button</Button>
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
