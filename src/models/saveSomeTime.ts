import { toggleStopwatchRunning, setStopwatchTime } from "../store/stopwatchState/stopwatch.actions";

export interface IAction {
  type: string;
  payload: any;
}

export interface IStopwatchState {
  stopwatchRunning: boolean;
  stopwatchTime: number;
}

export interface IAppProps {
  toggleStopwatchRunning: typeof toggleStopwatchRunning,
  setStopwatchTime: typeof setStopwatchTime,
  stopwatchState: IStopwatchState;
}

export interface ISaveSomeTimeState {
  stopwatchState: IStopwatchState;
}