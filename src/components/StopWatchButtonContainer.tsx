import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { setStopwatchTime } from '../store/stopwatchState/stopwatch.actions';
import { ISaveSomeTimeState, IStopwatchState } from '../models/saveSomeTime';
import { button, theme, text } from '../styles';
import { AppButton } from './AppButton';

interface IStopWatchtimerButtonsContainerState {
  milliseconds: number;
  startTime: number;
  isStopwatchRunning: boolean;
}

interface IStopWatchtimerButtonsContainerProps {
  stopwatchState: IStopwatchState,
  setStopwatchTime: typeof setStopwatchTime
}

class StopWatchtimerButtonsContainer extends React.Component<IStopWatchtimerButtonsContainerProps, IStopWatchtimerButtonsContainerState> {
  private interval = 0;

  constructor(props: IStopWatchtimerButtonsContainerProps) {
    super(props);

    this.state = {
      milliseconds: 0,
      startTime: 0,
      isStopwatchRunning: false
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
  };

  private getDisplayValue = (milliseconds: number) => {
    let seconds = milliseconds / 1000;
    let hours = seconds / 3600; // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    let minutes = seconds / 60; // 60 seconds in 1 minute
    seconds = seconds % 60;

    const secondsString = this.getLeadingZero(seconds);
    const minutesString = this.getLeadingZero(minutes);
    const hoursString = this.getLeadingZero(hours);
    const timeString = `${hoursString}:${minutesString}:${secondsString}`;
    return timeString;
  }

  private getLeadingZero = (value: number): string => {
    const time = Math.floor(value);

    return time < 10
      ? `0${time}`
      : time.toString();
  }

  private save = () => {
    this.props.setStopwatchTime(this.state.milliseconds);
  }

  private getSaveButton = () => {
    return (!this.state.isStopwatchRunning && this.state.milliseconds > 0)
    ? <AppButton buttonStyles={styles.saveEnabled} textStyles={text.whiteText} onPress={this.save} label="Save"></AppButton>
    : <AppButton buttonStyles={styles.saveDisabled} textStyles={text.whiteText} label="Save" disabled={true}></AppButton>;
  }

  private getStopwatchButton = () => {
    return !this.state.isStopwatchRunning
      ? <AppButton buttonStyles={styles.startButton} textStyles={text.whiteText} onPress={this.startStopwatch} label="Start"></AppButton>
      : <AppButton buttonStyles={styles.stopButton} textStyles={text.whiteText} onPress={this.stopStopwatch} label="Stop"></AppButton>
  }

  render() {
    return (
      <View style={styles.componentContainer}>
        <Text style={styles.timer}>
          {this.getDisplayValue(this.state.milliseconds)}
        </Text>
        <View style={styles.timerButtonsContainer}>
          <AppButton buttonStyles={styles.resetButton} textStyles={text.whiteText} onPress={this.resetStopwatch} label="Reset"></AppButton>
          {this.getStopwatchButton()}
        </View>
        {this.getSaveButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  startButton: {
    ...button.roundButton,
    backgroundColor: theme.primary,
    width: 100,
    height: 40
  },
  stopButton: {
    ...button.roundButton,
    backgroundColor: theme.accent,
    width: 100,
    height: 40
  },
  resetButton: {
    ...button.roundButton,
    backgroundColor: theme.warning,
    width: 100,
    height: 40
  },
  saveDisabled: {
    ...button.roundButton,
    backgroundColor: theme.darkLighter,
    width: 210,
    height: 40,
    marginTop: 10
  },
  saveEnabled: {
    ...button.roundButton,
    backgroundColor: theme.dark,
    width: 210,
    height: 40,
    marginTop: 10
  },
  timerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210
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

export default connect(mapStateToProps, mapDispatchToProps)(StopWatchtimerButtonsContainer);
