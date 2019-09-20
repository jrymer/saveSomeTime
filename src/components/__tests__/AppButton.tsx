import React from 'react';
import { StyleSheet } from 'react-native';
import renderer from 'react-test-renderer';

import { button, theme } from '../../styles';
import { AppButton } from '../AppButton';

// Note: test renderer must be required after react-native.
const styles = StyleSheet.create({
  butonStyles: {
    ...button.roundButton,
    backgroundColor: theme.primary,
    width: 100,
    height: 40
  },
  textStyles: {
    color: theme.font
  }
});

const props = {
  buttonStyles: styles.butonStyles,
  textStyles: styles.textStyles,
  onPress: () => true,
  label: 'label'
};

it('renders correctly', () => {
  const tree = renderer.create(
    < AppButton
      buttonStyles={props.buttonStyles}
      textStyles={props.textStyles}
      onPress={props.onPress}
      label={props.label}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
