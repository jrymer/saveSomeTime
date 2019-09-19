export const TOGGLE_STOPWATCH = '[Stopwatch] Toggle Stopwatch';
export const SET_STOPWATCH_TIME = '[Stopwatch] Set Stopwatch Time';

interface IToggleStopwatchRunning  {
  type: typeof TOGGLE_STOPWATCH;
}

interface ISetStopwatchTime {
  payload: number;
  type: typeof SET_STOPWATCH_TIME;
}

export type StopwatchTypes =
  IToggleStopwatchRunning
  | ISetStopwatchTime;
