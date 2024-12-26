<<<<<<< HEAD
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

// Định nghĩa các style cho component
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight, // Điều chỉnh cho thanh status bar
    flex: 1,
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rate Repository Application</Text>
    </View>
  );
};

=======
import Main from './src/components/Main';

const App = () => {
  return <Main />;
};

>>>>>>> d2ad2326e39b2f8085bbc7d26351d37aed20eb18
export default App;
