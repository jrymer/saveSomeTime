import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import { ISaveSomeTimeState, IStopwatchState } from '../models/saveSomeTime';
import { setStopwatchTime } from '../store/stopwatchState/stopwatch.actions';
import { text, theme } from '../styles';
import { getDisplayValue } from '../utils/timerUtils';
import { AppButton } from './AppButton';

interface IStopWatchtimerButtonsContainerState {
  milliseconds: number;
  startTime: number;
  isStopwatchRunning: boolean;
}

interface IStopWatchtimerButtonsContainerProps {
  stopwatchState: IStopwatchState;
  setStopwatchTime: typeof setStopwatchTime;
  navigation: NavigationScreenProp<any, any>;
}

class StopWatchtimerButtonsContainer extends React.Component
  <IStopWatchtimerButtonsContainerProps, IStopWatchtimerButtonsContainerState> {
  private interval = 0;

  constructor(props: IStopWatchtimerButtonsContainerProps) {
    super(props);

    this.state = {
      milliseconds: 0,
      startTime: 0,
      isStopwatchRunning: false
    };
  }

  public componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render() {
    return (
      <View style={styles.componentContainer}>
        <Text style={styles.timer}>
          {getDisplayValue(this.state.milliseconds)}
        </Text>
        <View style={styles.timerButtonsContainer}>
          <AppButton buttonStyles={styles.resetButton} textStyles={text.whiteText} onPress={this.resetStopwatch} label='Reset'></AppButton>
          {this.getStopwatchButton()}
        </View>
        {this.getSaveButton()}
      </View>
    );
  }

  private tick = () => {
    const difference = new Date().getTime() - this.state.startTime;
    this.setState((prevState: IStopWatchtimerButtonsContainerState) => ({ ...prevState, milliseconds: difference }));
  }

  private startStopwatch = () => {
    let { startTime } = this.state;

    if (startTime === 0) {
      startTime = new Date().getTime();
    }

    this.setState((prevState: IStopWatchtimerButtonsContainerState) => (
      {
        ...prevState,
        isStopwatchRunning: true,
        startTime
      }));

    this.interval = setInterval(
      () => this.tick(),
      10);
  }

  private stopStopwatch = () => {
    this.setState((prevState: IStopWatchtimerButtonsContainerState) => (
      {
        ...prevState,
        isStopwatchRunning: !prevState.isStopwatchRunning
      }));
    clearInterval(this.interval);
  }

  private resetStopwatch = () => {
    this.setState((prevState: IStopWatchtimerButtonsContainerState) => (
      { ...prevState, isStopwatchRunning: false, milliseconds: 0, startTime: 0 }
    ));
    clearInterval(this.interval);
  }

  private save = () => {
    this.props.setStopwatchTime(this.state.milliseconds);
    this.props.navigation.navigate('SaveTime');
  }

  private getSaveButton = () => {
    return (!this.state.isStopwatchRunning && this.state.milliseconds > 0)
      ? <AppButton
          buttonStyles={styles.saveEnabled}
          onPress={this.save}
          label='Save'>
        </AppButton>
      : <AppButton
          buttonStyles={styles.saveDisabled}
          label='Save'
          disabled>
        </AppButton>;
  }

  private getStopwatchButton = () => {
    return !this.state.isStopwatchRunning
      ? <AppButton buttonStyles={styles.startButton} onPress={this.startStopwatch} label='Start'></AppButton>
      : <AppButton buttonStyles={styles.stopButton} onPress={this.stopStopwatch} label='Stop'></AppButton>;
  }
}

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  startButton: {
    width: 150,
    backgroundColor: theme.primary
  },
  stopButton: {
    width: 150,
    backgroundColor: theme.accent
  },
  resetButton: {
    width: 150,
    backgroundColor: theme.warning
  },
  saveDisabled: {
    backgroundColor: theme.disabled
  },
  saveEnabled: {
    backgroundColor: theme.dark
  },
  timerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320
  },
  timer: {
    fontSize: 60,
    textAlign: 'center'
  }
});

const mapStateToProps = (state: ISaveSomeTimeState) => {
  const { stopwatchState } = state;
  return { stopwatchState };
};

const mapDispatchToProps = { setStopwatchTime };

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(StopWatchtimerButtonsContainer));
