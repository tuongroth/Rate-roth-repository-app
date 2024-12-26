// components/SignIn.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e4e8',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SignIn;
