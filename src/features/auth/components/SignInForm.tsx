import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

export const SignInForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formInput}>
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Password" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Login" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  formInput: {
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1,
    justifyContent: 'flex-start',
    borderColor: 'red',
    borderStyle: 'solid',
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 0,
  },
});
