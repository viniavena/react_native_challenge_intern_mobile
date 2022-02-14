import React from 'react';
import {KeyboardTypeOptions, NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData} from 'react-native';
import {screenHeight, screenWidth} from '../constants/dimensions';
import {colors} from '../constants/theme';

interface InputProps {
  onChangeText: ((text: string) => void) | undefined;
  onBlur: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  value: string;
  secureTextEntry: boolean;
  placeHolder: string;
  keyboardType: KeyboardTypeOptions | undefined;
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined;
}

const Input = (props: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeHolder}
      placeholderTextColor={colors.background}
      secureTextEntry={props.secureTextEntry}
      onBlur={props.onBlur}
      onChangeText={props.onChangeText}
      value={props.value}
      keyboardType={props.keyboardType}
      autoCapitalize={props.autoCapitalize}
      autoCorrect={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: screenHeight * 0.025,
    width: screenWidth * 0.87,
    height: 48,
    borderRadius: 4,
    borderColor: colors.background,
    borderWidth: 1,
    fontSize: 16,
    color: colors.background,
  },
});

export default Input;
