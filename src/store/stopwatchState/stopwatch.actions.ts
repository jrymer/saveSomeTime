import { SET_STOPWATCH_TIME, StopwatchTypes, TOGGLE_STOPWATCH } from './stopwatch.types';

export const toggleStopwatchRunning = (): StopwatchTypes  => ({
  type: TOGGLE_STOPWATCH
});

export const setStopwatchTime = (time: number): StopwatchTypes => {
  return {
    payload: time,
    type: SET_STOPWATCH_TIME
  };
};
