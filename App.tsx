import React from 'react';
import {AppContent} from './src/components/AppContent';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from './src/context/context';

const App = () => {
  return (
    <Provider>
      <SafeAreaView style={{flex: 1}}>
        <AppContent />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
