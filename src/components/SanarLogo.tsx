import React, {Component} from 'react';
import {Image} from 'react-native';
import { screenHeight } from '../constants/dimensions';

class SanarLogo extends Component {
  render() {
    return (
      <Image
        source={require('../assets/images/logo-sanar.png')}
        style={{height: screenHeight*0.07}}
        resizeMode ='contain'
      />
    );
  }
}

export default SanarLogo;
