import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faBusinessTime, faSave, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Provider } from 'react-redux';

import DrawerNavigator from './navigation/drawer.navigator';
import { store } from './store';

// import { faWatchFitness } from '@fortawesome/pro-regular-svg-icons';
library.add(
  faBars,
  faSave,
  faBusinessTime,
  faStopwatch
);

export class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
          <DrawerNavigator />
      </Provider>
    );
  }
}
