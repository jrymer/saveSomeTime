import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { DrawerComponent } from '../components/DrawerComponent';
import IconComponent from '../components/IconComponent';
import { text, theme } from '../styles';
import { SavedTimeStack, SaveTimeStack, StopWatchStack } from './views.navigator';

const DrawerNavigator = createDrawerNavigator({
  SaveTime: {
    screen: SaveTimeStack,
    navigationOptions: {
      drawerLabel: 'Save Time',
      drawerIcon: IconComponent('save')
    }
  },
  SavedTime: {
    screen: SavedTimeStack,
    navigationOptions: () => ({
      drawerLabel: 'Saved Time',
      drawerIcon: IconComponent('business-time')
    })
  },
  StopWatch: {
    screen: StopWatchStack,
    navigationOptions: () => ({
      drawerLabel: 'Stopwatch',
      drawerIcon: IconComponent('stopwatch')
    })
  }
}, {
  initialRouteName: 'StopWatch',
  contentComponent: DrawerComponent as any,
  drawerBackgroundColor: theme.dark,
  contentOptions: {
    activeTintColor: text.primaryText.color,
    activeBackgroundColor: theme.primary,
    inactiveTintColor: text.primaryText.color,
    labelStyle: text.primaryText.fontFamily
  }
});

export default createAppContainer(DrawerNavigator);
