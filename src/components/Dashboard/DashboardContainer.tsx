import React, { Dispatch, PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { AnyAction } from 'redux';
import { getRequest } from '../../api';

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class DashBoardContainerInner extends PureComponent<Props, State> {
  public state = {};

  async componentDidMount() {}

  public render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  fetchCurrencyPairs: dispatch({ type: 'REQUEST_FETCH_CURRENCY_PAIRS' }),
});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainerInner);
