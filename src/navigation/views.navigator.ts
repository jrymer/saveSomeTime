import { createStackNavigator } from 'react-navigation-stack';

import HamburgerComponent from '../components/HamburgerComponent';
import { theme } from '../styles';
import { SavedTimeView, SaveTimeView } from '../views';
import StopWatchView from '../views/StopWatchView';

const navigationOptions = () => ({
  headerLeft: HamburgerComponent,
  headerStyle: {
    backgroundColor: theme.dark
  }
});

export const StopWatchStack = createStackNavigator({
  StopWatchScreen: {
    screen: StopWatchView,
    navigationOptions
  },
});

export const SavedTimeStack = createStackNavigator({
  SavedTimeScreen: {
    screen: SavedTimeView,
    navigationOptions
  },
});

export const SaveTimeStack = createStackNavigator({
  SaveTimeScreen: {
    screen: SaveTimeView,
    navigationOptions
  },
});
