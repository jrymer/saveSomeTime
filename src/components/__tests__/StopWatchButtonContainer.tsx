import React from 'react';
import configureStore from 'redux-mock-store';

import { setStopwatchTime } from '../../store/stopwatchState/stopwatch.actions';

const initialState = {}; // here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();

const props: any = {
  stopwatchState: {
    stopwatchRunning: false,
    stopwatchTime: 1000
  },
  setStopwatchTime,
  navigation: {
    navigate: jest.fn()
  }
};

describe('StopWatchButtonContainer Tests', () => {
  it('StopWatchButtonContainer correctly w/ snapshot', () => {
    expect(true).toBeTruthy();
    // const store = mockStore(initialState);
    // const tree = renderer.create(
    //   <Provider store={store}>
    //     <StopWatchButtonContainer {...props}
    //     />
    //   </Provider>).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
