// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Main from './Main';  // Import Main component

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Main />  {/* Use Main component */}
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
