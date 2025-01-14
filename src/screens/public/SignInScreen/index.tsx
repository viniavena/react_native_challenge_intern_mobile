import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import * as yup from 'yup';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import {PropsSignInScreen} from '../../../routes/main.routes';
import SanarLogo from '../../../components/SanarLogo';
import {colors} from '../../../constants/theme';
import {screenHeight} from '../../../constants/dimensions';
import MainButton from '../../../components/MainButton';
import SignedOutHeader from '../../../components/SignedOutHeader';
import {doLogin} from '../../../services/loginAPI';
import Input from '../../../components/Input';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Entre com um endereço de e-mail válido')
    .required('Endereço de e-mail obrigatório'),
  password: yup
    .string()
    .min(8, ({min}) => `A senha deve ter no mínimo ${min} caracteres`)
    .required('Senha obrigatória')
    .matches(
      /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-])/,
      'Senha inválida',
    ),
});

const SignInScreen = ({navigation}: PropsSignInScreen) => {
  const [loading, setLoading] = useState(false);

  async function logIn(values: any) {
    setLoading(true);
    const response = await doLogin(values);
    if (response == 'OK') {
      showMessage({
        message: 'Seja bem vind@!',
        type: 'success',
      });
      setLoading(false);
      navigation.navigate('MainScreen');
    } else {
      showMessage({
        message: 'Erro ao fazer login',
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" />
      <SignedOutHeader
        onPress={() => navigation.navigate('OnboardScreen')}
        text="Login"
      />

      <SanarLogo negative={true} />

      <Image
        source={require('../../../assets/images/user-avatar.png')}
        style={{
          height: screenHeight * 0.16,
          marginVertical: screenHeight * 0.05,
        }}
        resizeMode="contain"
      />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          logIn(values);
        }}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <Input
              placeHolder="Digite seu e-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              secureTextEntry={false}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              placeHolder="Digite sua senha de acesso"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              value={values.password}
              keyboardType="default"
              autoCapitalize="none"
            />

            <View style={{marginTop: 5, alignItems: 'center'}}>
              {errors.email && touched.email && (
                <Text style={styles.notAccess}>{errors.email}</Text>
              )}

              {errors.password && touched.password && (
                <Text style={styles.notAccess}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.mainButton}>
              <MainButton
                containerColor={colors.background}
                onPress={handleSubmit}
                text="Entrar"
                textColor={colors.primary}
                disabled={!isValid || loading}
                loading={loading}
              />
            </View>
          </>
        )}
      </Formik>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={styles.notAccess}>Não possui um acesso? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpButton}>Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    paddingTop: screenHeight * 0.05,
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  notAccess: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 14,
    color: colors.background,
  },
  signUpButton: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: 14,
    color: colors.background,
  },
  mainButton: {
    marginTop: screenHeight * 0.1,
  },
});

export default SignInScreen;
