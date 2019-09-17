import { StopwatchTypes, TOGGLE_STOPWATCH, SET_STOPWATCH_TIME } from './stopwatch.types';

export const toggleStopwatchRunning = (): StopwatchTypes  => ({
  type: TOGGLE_STOPWATCH
});

export const setStopwatchTime = (time: number): StopwatchTypes => {
  return {
    type: SET_STOPWATCH_TIME,
    payload: time
  }
};
