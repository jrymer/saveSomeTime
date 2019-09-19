import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type Props = {
  buttonStyles: ViewStyle,
  textStyles: TextStyle,
  onPress?: any,
  label: string,
  disabled?: boolean
} & Partial<DefaultProps>;

type DefaultProps = Readonly<typeof defaultProps>;
const defaultProps = {
  disabled: false,
  onPress: () => true
};

export class AppButton extends React.Component<Props> {
  private static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <TouchableOpacity style={this.props.buttonStyles} onPress={this.props.onPress} disabled={this.props.disabled}>
        <Text style={this.props.textStyles}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
