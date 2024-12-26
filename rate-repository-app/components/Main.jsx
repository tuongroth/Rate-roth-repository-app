import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Main Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default Main;
