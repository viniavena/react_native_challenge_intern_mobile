import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import {PropsOnboardScreen} from '../../../routes/main.routes';
import SanarLogo from '../../../components/SanarLogo';
import {colors} from '../../../constants/theme';
import {screenHeight, screenWidth} from '../../../constants/dimensions';
import MainButton from '../../../components/MainButton';

const OnboardScreen = ({navigation}: PropsOnboardScreen) => {
  return (
    <View style={styles.background}>
      <SanarLogo />
      <Text style={styles.title}>
        Temos uma solução para cada {'\n'} etapa da sua carreira na medicina
      </Text>
      <Text style={styles.subTitle}>
        Existimos para te ajudar em cada passo dessa incrível {'\n'} missão de
        cuidar de vidas.
      </Text>
      <Image
        source={require('../../../assets/images/onboarding-doodle.png')}
        style={styles.doodleImage}
        resizeMode="contain"
      />
      <View style={styles.mainButton}>
        <MainButton
          onPress={() => navigation.navigate('SignInScreen')}
          containerColor={colors.primary}
          text="Começar Agora"
          textColor={colors.background}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    paddingTop: screenHeight * 0.05,
    backgroundColor: colors.background,
  },
  title: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: 20,
    width: screenWidth * 0.9,
    textAlign: 'center',
    color: colors.onBoardingTitle,
    marginTop: screenHeight * 0.05,
  },
  subTitle: {
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 14,
    width: screenWidth * 0.9,
    color: colors.onBoardingTitle,
    textAlign: 'center',
    marginTop: screenHeight * 0.025,
  },
  doodleImage: {
    width: screenWidth,
    marginTop: screenHeight * 0.0475,
  },
  mainButton: {
    position: 'absolute',
    bottom: screenHeight * 0.0625,
  },
});

export default OnboardScreen;
