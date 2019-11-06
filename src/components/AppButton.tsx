import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { button, text } from '../styles';

interface IProps {
  label: string;
  buttonStyles?: ViewStyle;
  textStyles?: TextStyle;
  onPress?: () => void;
  disabled?: boolean;
}

const defaultProps: Partial<IProps> = {
  disabled: false
};

export class AppButton extends React.Component<IProps> {
  private static defaultProps = defaultProps;

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const {
      buttonStyles,
      textStyles,
      label,
      onPress,
      disabled
    } = this.props;

    const mergedButtonStyles = {
      ...button.roundButton,
      ...buttonStyles
    };
    const mergedTextStyles = {
      ...text.primaryText,
      ...textStyles
    };

    return (
      <TouchableOpacity
        style={mergedButtonStyles}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={mergedTextStyles}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
