import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AllBoats from './src/AllBoats';

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <AllBoats />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
