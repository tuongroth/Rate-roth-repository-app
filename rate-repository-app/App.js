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

export default App;
