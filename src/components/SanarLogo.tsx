import React, {Component} from 'react';
import {Image} from 'react-native';
import {screenHeight} from '../constants/dimensions';

interface LogoProps {
  negative: boolean;
}

const SanarLogo = (props: LogoProps) => {
  return (
    <Image
      source={
        props.negative
          ? require('../assets/images/logo-negativo.png')
          : require('../assets/images/logo-sanar.png')
      }
      style={{height: screenHeight * 0.07}}
      resizeMode="contain"
    />
  );
};

export default SanarLogo;
