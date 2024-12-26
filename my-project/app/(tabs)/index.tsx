// Main.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList'; // Import RepositoryList

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />  {/* Render the repository list */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default Main;
