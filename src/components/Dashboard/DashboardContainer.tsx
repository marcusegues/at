import React, { Dispatch, PureComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers/types';
import { AnyAction } from 'redux';

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class DashBoardContainerInner extends PureComponent<Props, State> {
  public state = {};

  public render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({});

export const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainerInner);
