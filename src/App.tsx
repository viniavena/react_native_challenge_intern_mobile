import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import MainStack from './routes/main.routes';
import {colors} from './constants/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <NavigationContainer>
        <FlashMessage
          floating={true}
          style={{ alignItems: 'center' }}
          titleStyle={{ fontWeight: 'bold' }}
        />
        <MainStack />
      </NavigationContainer>
  );
};

export default App;
