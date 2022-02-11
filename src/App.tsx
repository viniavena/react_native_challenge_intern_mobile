import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainStack from './routes/main.routes'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
