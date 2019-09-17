import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

type Props = {
  buttonStyles: ViewStyle,
  textStyles: TextStyle,
  onPress?: any,
  label: string,
  disabled?: boolean
} & Partial<DefaultProps>

type DefaultProps = Readonly<typeof defaultProps>;
const defaultProps = {
  disabled: false,
  onPress: () => {}
};

export class AppButton extends React.Component<Props> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={this.props.buttonStyles} onPress={this.props.onPress} disabled={this.props.disabled}>
        <Text style={this.props.textStyles}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
