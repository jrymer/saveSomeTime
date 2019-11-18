import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';

import { AppButton } from '../components/AppButton';
import { AppTextInput } from '../components/AppTextInput';
import { ISaveSomeTimeState, IStopwatchState } from '../models/saveSomeTime';
import { appStyles, theme } from '../styles';
import { getDisplayValue } from '../utils/timerUtils';

interface IProps {
  stopwatchState: IStopwatchState;
  navigation: NavigationScreenProp<any, any>;
}

interface IState {
  titleValue: string;
  actionValue: string;
  notesValue: string;
  showErrorMessage: boolean;
  formValid: boolean;
}

class SaveTimeView extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      titleValue: '',
      actionValue: '',
      notesValue: '',
      showErrorMessage: false,
      formValid: false
    };
  }

  public render() {
    const mergedStyles = {
      ...appStyles.appContainer,
      ...appStyles.appFlexColumnContainer
    };

    return (
      <View style={mergedStyles}>
        <Text style={styles.timer}>{getDisplayValue(this.props.stopwatchState.stopwatchTime)}</Text>
        <AppTextInput
          key='titleInput'
          placeholder='Cooking dinner'
          valueCallback={this.titleResponse}
          maxLength={30}
          title='Timer Title'
          required
        />
        <AppTextInput
          key='actionInput'
          placeholder='Baking instead of crockpot...'
          valueCallback={this.actionResponse}
          maxLength={15}
          title='Action Name'
          required
        />
        <View key='notesInput'>
          <AppTextInput
            title='Additional notes'
            placeholder='Ran out of seasoning'
            valueCallback={this.notesResponse}
            styles={styles.notesStyles}
            maxLength={60}
            multiLine
          />
        </View>
        <View style={styles.actionsContainer}>
          {this.getSaveButton()}
          <AppButton
            label={'Cancel'}
            buttonStyles={styles.cancelButton}
            onPress={() => this.props.navigation.navigate('Home')}
          ></AppButton>
        </View>
      </View>
    );
  }

  private getSaveButton = () => (
    this.state.formValid
      ? <AppButton
        key='saveTimeViewSaveEnabled'
        label={'Save'}
        buttonStyles={styles.saveButtonEnabled}
        onPress={this.submitForm}
      ></AppButton>
      : <AppButton
        key='saveTimeViewSaveDisabled'
        label={'Save'}
        buttonStyles={styles.saveButtonDisabled}
        disabled
      ></AppButton>

  )

  private submitForm = () => {
    const {
      titleValue,
      actionValue,
      notesValue
    } = this.state;

    // dispatch an action to save this bish
  }

  private titleResponse = (titleValue: string) => {
    this.setState((prevState: IState) => ({ ...prevState, titleValue }));
    this.checkFormValid();
  }

  private actionResponse = (actionValue: string) => {
    this.setState((prevState: IState) => ({ ...prevState, actionValue }));
    this.checkFormValid();
  }

  private notesResponse = (notesValue: string) =>
    this.setState((prevState: IState) => ({ ...prevState, notesValue }))

  private checkFormValid = () => {
    const { titleValue, actionValue } = this.state;

    if (titleValue.length > 0 && actionValue.length > 0) {
      this.setState((prevState: IState) => ({ ...prevState, formValid: true }));
    } else {
      this.setState((prevState: IState) => ({ ...prevState, formValid: false }));
    }
  }
}

const styles = StyleSheet.create({
  notesStyles: {
    fontSize: 15
  },
  saveButtonEnabled: {
    backgroundColor: theme.primary,
  },
  saveButtonDisabled: {
    backgroundColor: theme.disabled,
  },
  cancelButton: {
    backgroundColor: theme.accent,
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20
  }
});

const mapStateToProps = (state: ISaveSomeTimeState) => {
  const { stopwatchState } = state;
  return { stopwatchState };
};

export default connect(mapStateToProps)(SaveTimeView);
