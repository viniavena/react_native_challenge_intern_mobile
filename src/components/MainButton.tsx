import React from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { screenHeight, screenWidth } from '../constants/dimensions';

interface MainButtonProps {
  onPress: () => void;
  containerColor: string;
  text: string;
  textColor: string;
  disabled: boolean;
  loading: boolean;
}

const MainButton = ( props : MainButtonProps) => {
  return (
    <TouchableOpacity
    disabled={props.disabled}
      onPress={props.onPress}
      style={{...styles.buttonContainer, backgroundColor: props.containerColor}}>
{        props.loading? <ActivityIndicator color={props.textColor}/> :
      <Text style={{...styles.buttonText, color: props.textColor}}>{props.text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth*0.87,
    height: 48,
    borderRadius: 4,
  },
  buttonText: {
      fontFamily: 'RedHatDisplay-Bold',
      fontSize: 16
  },
});

export default MainButton;