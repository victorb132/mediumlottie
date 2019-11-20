import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

import medium from './medium.json';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Lottie resizeMode="contain" autoSize source={medium} autoPlay loop />
    </SafeAreaView>
  );
}
