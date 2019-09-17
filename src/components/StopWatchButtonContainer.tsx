import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { toggleStopwatchRunning, setStopwatchTime } from '../store/stopwatchState/stopwatch.actions';
import { IAppProps, ISaveSomeTimeState } from '../models/saveSomeTime';

interface IStopWatchButtonContainerState {
  milliseconds: number;
  startTime: number;
  isStopwatchRunning: boolean;
}

class StopWatchButtonContainer extends React.Component<IAppProps, IStopWatchButtonContainerState> {
  private interval = 0;
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      milliseconds: 0,
      startTime: 0,
      isStopwatchRunning: false
    };
  }

  // private toggleStopwatch = () => {
  //   this.props.toggleStopwatchRunning();
  //   this.setState((prevState: IStopWatchButtonContainerState) => (
  //     {
  //       ...prevState,
  //       isStopwatchRunning: !prevState.isStopwatchRunning
  //     }));
  //   // this.setState((prevState: IStopWatchButtonContainerState) => ({ stopwatch: prevState.stopwatch + 1 }));
  //   // console.log(this.state.stopwatch);
  //   // this.props.setStopwatchTime(this.state.stopwatch);
  // }

  private getDisplayValue = (value: number): string | number => {
    return value < 10
      ? `0${value}`
      : value;
  }

  private tick = () => {
    const difference = new Date().getTime() - this.state.startTime;
    console.log(difference, 'tick');
    this.setState((prevState: IStopWatchButtonContainerState) => ({ ...prevState, milliseconds: difference }));
  }

  private startStopwatch = () => {
    // this.props.toggleStopwatchRunning();
    const startTime = new Date().getTime();
    this.setState((prevState: IStopWatchButtonContainerState) => (
      {
        ...prevState,
        isStopwatchRunning: true,
        startTime
      }));
    this.interval = setInterval(this.tick(), 1000);
  }

  private stopStopwatch = () => {
    // this.props.toggleStopwatchRunning();
    this.setState((prevState: IStopWatchButtonContainerState) => (
      {
        ...prevState,
        isStopwatchRunning: !prevState.isStopwatchRunning
      }));
    clearInterval(this.interval);
  }

  private getStopwatchButton() {
    return !this.state.isStopwatchRunning
    ? <Button onPress={this.startStopwatch} title="Start"></Button>
    : <Button onPress={this.stopStopwatch} title="Stop"></Button>
  }

  render (){
    return (
      <View>
        <Text>BUttong container</Text>
        <Text>
          { this.state.milliseconds }
        </Text>
        { this.getStopwatchButton() }
      </View>
    )
  }
}

const mapStateToProps = (state: ISaveSomeTimeState) => {
  const { stopwatchState } = state;
  return { stopwatchState };
};

export default connect(mapStateToProps, { toggleStopwatchRunning, setStopwatchTime })(StopWatchButtonContainer);