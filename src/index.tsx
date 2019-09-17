import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import RootNavigatorContainer from './navigation/root.navigator';
import { store } from './store';
import { theme } from './styles';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigatorContainer />
        </View>
      </Provider>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
