import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SanarLogo from './components/SanarLogo';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={styles.sectionTitle}>Sanar App</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>
          Unlimited acces to thousands of online Articles...
        </Text>
        <View style={styles.image}>
          <SanarLogo />
        </View>
        <View style={styles.button}>
          <Button title="Get Started" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#338BFF',
  },
  highlight: {
    fontWeight: '900',
  },
  image: {
    paddingTop: 30,
  },
  button: {
    paddingTop: 320,
  },
});

export default App;
