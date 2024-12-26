// src/Main.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
});

export default Main;
