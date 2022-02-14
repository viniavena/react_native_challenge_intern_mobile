import React, { Dispatch, SetStateAction } from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';
import {screenHeight, screenWidth} from '../constants/dimensions';
import {colors} from '../constants/theme';

interface InputProps {
  onChangeText: Dispatch<SetStateAction<string>>;
  onBlur: () => void;
  value: string;
  secureTextEntry: boolean;
  placeHolder: string;
}

const Input = (props: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeHolder}
      placeholderTextColor={colors.background}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      value={props.value}
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
