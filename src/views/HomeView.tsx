import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import StopWatchButtonContainer from '../components/StopWatchButtonContainer';
import { ISaveSomeTimeState, IStopwatchState } from '../models/saveSomeTime';

interface IProps {
  stopwatchState: IStopwatchState;
}

class HomeView extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <View>
        <Text>Home View</Text>
        <Text>{ this.props.stopwatchState.stopwatchRunning }</Text>
        <Text>{ this.props.stopwatchState.stopwatchTime }</Text>
        <StopWatchButtonContainer></StopWatchButtonContainer>
      </View>
    );
  }
}

const mapStateToProps = (state: ISaveSomeTimeState) => {
  const { stopwatchState } = state;
  return { stopwatchState };
};

export default connect(mapStateToProps)(HomeView);
