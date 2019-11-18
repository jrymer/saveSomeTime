import React from 'react';
import { Text, View } from 'react-native';

import { appStyles } from '../styles';

class SavedTimeView extends React.Component {
  public render() {
    return (
      <View style={appStyles.appContainer}>
        <Text>Saved time</Text>
      </View>
    );
  }
}

export default SavedTimeView;
