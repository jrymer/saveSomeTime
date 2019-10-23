import { StyleSheet } from 'react-native';

import { theme } from './theme';

export const button = StyleSheet.create({
  roundButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    width: 320,
    height: 40
  }
});

export const text = StyleSheet.create({
  whiteText: {
    color: theme.font
  },
  warningText: {
    color: theme.warning
  }
});
