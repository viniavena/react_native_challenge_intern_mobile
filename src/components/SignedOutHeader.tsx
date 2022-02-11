import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {screenHeight, screenWidth} from '../constants/dimensions';
// import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../constants/theme';

interface SignedOutHeaderProps {
  onPress: () => void;
  text: string;
}

const SignedOutHeader = (props: SignedOutHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.buttonContainer}>
            {//<Icon name="users" size={60} color={colors.background} />
            }
        </TouchableOpacity>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: screenWidth,
    marginBottom: screenHeight*0.05
  },
  buttonContainer: {},
  headerText: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: 20,
    color: colors.background,
    marginLeft: 24
  },
});

export default SignedOutHeader;
