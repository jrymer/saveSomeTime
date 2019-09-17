import * as navigation from 'react-navigation';
import HomeView from '../views/HomeView';

const RootNavigator: any = navigation.createSwitchNavigator(
  {
    Home: HomeView
  },
  { initialRouteName: 'Home' }
);

const RootNavigatorContainer = navigation.createAppContainer(RootNavigator);
export default RootNavigatorContainer;
