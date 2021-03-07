import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
