import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialStopwatchState, stopwatchReducer } from './stopwatchState/stopwatch.reducer';

const rootReducer = combineReducers({
  stopwatchState: stopwatchReducer
});

const initialRootState = {
  stopwatchState: initialStopwatchState
};

export const store = createStore(
  rootReducer,
  initialRootState,
  composeWithDevTools()
);

export type AppState = ReturnType<typeof rootReducer>;
