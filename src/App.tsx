import React from 'react';
import {useColorScheme} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import MainStack from './routes/main.routes';

const App = () => {

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
