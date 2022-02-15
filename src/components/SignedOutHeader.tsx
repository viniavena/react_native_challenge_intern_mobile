import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {screenHeight, screenWidth} from '../constants/dimensions';
import {colors} from '../constants/theme';

interface SignedOutHeaderProps {
  onPress: () => void;
  text: string;
}

const SignedOutHeader = (props: SignedOutHeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={require('../assets/icons/arrow-left.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: screenWidth * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth,
    marginBottom: screenHeight * 0.05,
  },
  headerText: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: 20,
    color: colors.background,
    marginLeft: 24,
  },
});

export default SignedOutHeader;
