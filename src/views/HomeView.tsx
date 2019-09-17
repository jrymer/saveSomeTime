import React from 'react';
import { View, Text } from 'react-native';
import StopWatchButtonContainer from '../components/StopWatchButtonContainer';
import { connect } from 'react-redux';
import { ISaveSomeTimeState, IAppProps } from '../models/saveSomeTime';

class HomeView extends React.Component<IAppProps> {
  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Home View</Text>
        <Text>{ this.props.stopwatchState.stopwatchRunning }</Text>
        <Text>{ this.props.stopwatchState.stopwatchTime }</Text>
        <StopWatchButtonContainer></StopWatchButtonContainer>
      </View>
    )
  }
}

const mapStateToProps = (state: ISaveSomeTimeState) => {
  const { stopwatchState } = state;
  return { stopwatchState };
};

export default connect(mapStateToProps)(HomeView);
