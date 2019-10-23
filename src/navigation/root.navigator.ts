import * as navigation from 'react-navigation';

import HomeView from '../views/HomeView';
import SaveTimeView from '../views/SaveTimeView';

const RootNavigator: any = navigation.createSwitchNavigator(
  {
    Home: HomeView,
    SaveTime: SaveTimeView
  },
  { initialRouteName: 'Home' }
);

const RootNavigatorContainer = navigation.createAppContainer(RootNavigator);
export default RootNavigatorContainer;
