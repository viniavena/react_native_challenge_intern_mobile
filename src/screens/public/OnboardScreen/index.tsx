import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {PropsOnboardScreen}  from '../../../routes/main.routes';
import SanarLogo from '../../../components/SanarLogo';


const OnboardScreen = ({navigation}: PropsOnboardScreen) => {
  return (
  <View style={styles.background}>
    <SanarLogo/>
<TouchableOpacity onPress={() =>
{navigation.navigate('SignInScreen')
}}>
  <Text >NAVEGA PARA LOGIN</Text>
</TouchableOpacity>
  </View>);
}


const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
  }
});

export default OnboardScreen;