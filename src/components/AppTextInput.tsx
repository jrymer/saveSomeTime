import { debounce } from 'lodash';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { theme } from '../styles';

interface IProps {
  placeholder: string;
  valueCallback: (value: any) => void;
  title: string;
  required?: boolean;
  maxLength?: number;
  multiLine?: boolean;
  styles?: any;
  underlineColorFocus?: string;
  underlinColorNonFocus?: string;
}

const defaultProps: Partial<IProps> = {
  title: 'Enter value',
  placeholder: 'Placeholder',
  underlineColorFocus: theme.primary,
  underlinColorNonFocus: theme.disabled,
  required: false
};

interface IState {
  isFocused: boolean;
}

export class AppTextInput extends React.Component<IProps, IState> {
  private static defaultProps = defaultProps;

  constructor(props: IProps) {
    super(props);

    this.state = {
      isFocused: false
    };
  }

  public render() {
    const { isFocused } = this.state;
    const {
      styles: propStyles,
      underlinColorNonFocus,
      underlineColorFocus,
      placeholder,
      maxLength,
      title,
      multiLine
    } = this.props;

    const mergedStyles = {
      ...styles.defaultStyles,
      ...propStyles
    };

    return (
      <View style={styles.containerStyles}>
        <Text style={styles.titleStyles}>{this.getRequired()}{title}</Text>
        <TextInput
          style={mergedStyles}
          placeholder={placeholder}
          onChangeText={debounce((v) => this.updateValue(v), 100)}
          selectionColor={underlineColorFocus}
          underlineColorAndroid={isFocused ? underlineColorFocus : underlinColorNonFocus}
          maxLength={maxLength}
          multiline={multiLine}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }

  private getRequired = () => (
    this.props.required
      ? <Text style={styles.requiredAstericks}>*</Text>
      : null
  )

  private handleBlur = () => {
    this.setState((prevState: IState) => ({ ...prevState, isFocused: false }));
  }

  private handleFocus = () => {
    this.setState((prevState: IState) => ({ ...prevState, isFocused: true }));
  }

  private updateValue = (value: string) => {
    this.props.valueCallback(value);
  }
}

const styles = StyleSheet.create({
  defaultStyles: {
    height: 40,
    width: 320,
    paddingLeft: 6,
    fontSize: 15
  },
  requiredAstericks: {
    color: theme.warning
  },
  titleStyles: {
    fontSize: 25
  },
  containerStyles: {
    margin: 10
  }
});
