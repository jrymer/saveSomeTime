import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { setStopwatchTime } from '../../store/stopwatchState/stopwatch.actions';
import StopWatchButtonContainer from '../StopWatchButtonContainer';

const initialState = {}; // here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();

const props = {
  stopwatchState: {
    stopwatchRunning: false,
    stopwatchTime: 1000
  },
  setStopwatchTime
};

describe('StopWatchButtonContainer Tests', () => {
  it('StopWatchButtonContainer correctly w/ snapshot', () => {
    const store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <StopWatchButtonContainer {...props}
        />
      </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
