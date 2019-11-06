import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';

import { AppButton } from '../components/AppButton';
import { ISaveSomeTimeState, IStopwatchState } from '../models/saveSomeTime';
import { setStopwatchTime } from '../store/stopwatchState/stopwatch.actions';
import { appStyles, text, theme } from '../styles';
import { getDisplayValue } from '../utils/timerUtils';

interface IStopWatchViewState {
  milliseconds: number;
  startTime: number;
  isStopwatchRunning: boolean;
}

interface IStopWatchViewProps {
  stopwatchState: IStopwatchState;
  setStopwatchTime: typeof setStopwatchTime;
  navigation: NavigationScreenProp<any, any>;
}

class StopWatchView extends React.Component
  <IStopWatchViewProps, IStopWatchViewState> {

  private interval = 0;

  constructor(props: IStopWatchViewProps) {
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
    const mergedStyles = {
      ...appStyles.appContainer,
      ...appStyles.appFlexColumnContainer
    };

    return (
      <View style={mergedStyles}>
        <Text style={styles.timer}>
          {getDisplayValue(this.state.milliseconds)}
        </Text>
        <View style={styles.timerButtonsContainer}>
          <AppButton
            buttonStyles={styles.resetButton}
            textStyles={text.primaryText}
            onPress={this.resetStopwatch}
            label='Reset'>
          </AppButton>
          {this.getStopwatchButton()}
        </View>
        {this.getSaveButton()}
      </View>
    );
  }

  private tick = () => {
    const difference = new Date().getTime() - this.state.startTime;
    this.setState((prevState: IStopWatchViewState) => ({ ...prevState, milliseconds: difference }));
  }

  private startStopwatch = () => {
    let { startTime } = this.state;

    if (startTime === 0) {
      startTime = new Date().getTime();
    }

    this.setState((prevState: IStopWatchViewState) => (
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
    this.setState((prevState: IStopWatchViewState) => (
      {
        ...prevState,
        isStopwatchRunning: !prevState.isStopwatchRunning
      }));
    clearInterval(this.interval);
  }

  private resetStopwatch = () => {
    this.setState((prevState: IStopWatchViewState) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(StopWatchView);
