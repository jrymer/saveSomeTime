import { createAppContainer, createSwitchNavigator, NavigationContainer, NavigationNavigator } from 'react-navigation';
import HomeView from '../views/HomeView';

const RootNavigator: any = createSwitchNavigator(
  {
    Home: HomeView
  },
  { initialRouteName: 'Home' }
);

const RootNavigatorContainer: NavigationContainer = createAppContainer(RootNavigator);
export default RootNavigatorContainer;
