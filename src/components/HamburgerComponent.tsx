import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationScreenProp, withNavigation } from 'react-navigation';

import IconComponent from './IconComponent';

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

const HamburgerComponent = (props: IProps) => (
  <View style={{ marginLeft: 10 }}>
    <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
      {IconComponent('bars')}
    </TouchableOpacity>
  </View>
);

export default withNavigation(HamburgerComponent);
