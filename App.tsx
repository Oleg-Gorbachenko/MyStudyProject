import React from 'react';
import {AppContent} from './src/components/AppContent';
import {SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from './src/context/context';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AppContent />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
