import React from 'react';
import { View } from 'react-native';
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
