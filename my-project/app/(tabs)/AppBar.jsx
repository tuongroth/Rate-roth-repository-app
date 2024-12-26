// components/AppBar.jsx

import React from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,  // Adjust for status bar height
    backgroundColor: '#24292e',  // App bar background color
    paddingHorizontal: 10,  // Add padding to left and right of the app bar
  },
  tab: {
    marginRight: 20,  // Add space between tabs
    paddingVertical: 10, // Add vertical padding for the tab
  },
  tabText: {
    color: 'white',  // Tab text color
    fontSize: 18,  // Font size for the tab
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Repositories</Text>
        </Pressable>
        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Sign in</Text>
        </Pressable>
        {/* Add more tabs here */}
      </ScrollView>
    </View>
  );
};

export default AppBar;
