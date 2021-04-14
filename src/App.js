import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Timer from './components/pages/Timer';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Timer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
