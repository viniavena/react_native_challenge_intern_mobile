import React , {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

import * as yup from 'yup';
import {Formik} from 'formik';
import { showMessage } from "react-native-flash-message";

import {PropsSignUpScreen} from '../../../routes/main.routes';
import SanarLogo from '../../../components/SanarLogo';
import {colors} from '../../../constants/theme';
import {screenHeight, screenWidth} from '../../../constants/dimensions';
import MainButton from '../../../components/MainButton';
import SignedOutHeader from '../../../components/SignedOutHeader';
import {doCreateUser} from '../../../services/loginAPI'
import Input from '../../../components/Input';

const signUpValidationSchema = yup.object().shape({
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
    name: yup
    .string()
    .required('Nome é obrigatório')
});

const SignUpScreen = ({navigation}: PropsSignUpScreen) => {

  const [loading, setLoading ] = useState(false);

  async function handleSubmit(values: any)
  {
    setLoading(true)
    console.log(values)
    const response = await doCreateUser(values)
    if(response == 'OK'){
      showMessage({
        message: "Cadastro criado com sucesso",
        type: "success",
      });
      navigation.goBack()
    } else {
      showMessage({
        message: "Erro ao criar cadastro",
        type: "danger",
      });
    }
    setLoading(false)
  }

  return (
    <View style={styles.background}>
      <SignedOutHeader onPress={() => navigation.goBack()} text="Cadastro" />

      <SanarLogo negative={true} />

      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{email: '', password: '', name:''}}
        onSubmit={values => {
          handleSubmit(values)
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
          <View style={styles.formsContainer}>

          <Input
              placeHolder="Digite seu nome"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              secureTextEntry={false}
              value={values.name}
              keyboardType="default"
              autoCapitalize='words'
            />
            
          <Input
              placeHolder="Digite seu e-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              secureTextEntry={false}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize='none'
            />

<Input
              placeHolder="Digite sua senha de acesso"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry={true}
              value={values.password}
              keyboardType='default'
              autoCapitalize='none'
            />

</View>
            <View style={{marginTop: 5, alignItems: 'center'}}>
            {errors.name && touched.name && (
                <Text style={styles.acceptConditions}>{errors.name}</Text>
              )}

              {errors.email && touched.email && (
                <Text style={styles.acceptConditions}>{errors.email}</Text>
              )}

              {errors.password && touched.password && (
                <Text style={styles.acceptConditions}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.mainButton}>
              <MainButton
                containerColor={colors.background}
                onPress={handleSubmit}
                text="Finalizar cadastro"
                textColor={colors.primary}
                disabled={!isValid}
                loading={loading}
              />
            </View>
          </>
        )}
      </Formik>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Text style={styles.acceptConditions}>Ao clicar em “Finalizar cadastro” você estará aceitando também nossos termos e condições. </Text>
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
  acceptConditions: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 14,
    color: colors.background,
    textAlign:'center'
  },
  signUpButton: {
    fontFamily: 'RedHatDisplay-Black',
    fontSize: 14,
    color: colors.background,
  },
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
  mainButton: {
    marginTop: screenHeight * 0.1,
  },
  formsContainer:{
    marginTop: screenHeight*0.1
  }
});

export default SignUpScreen;
