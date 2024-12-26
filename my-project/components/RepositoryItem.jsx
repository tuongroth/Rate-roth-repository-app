// components/RepositoryItem.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RepositoryItem = ({ repository }) => {
  const { fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl } = repository;

  // Format the counts to display them with 'k' if they are over 1000
  const formatCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.headerText}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.language}>{language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <Text style={styles.stat}>{formatCount(forksCount)} forks</Text>
        <Text style={styles.stat}>{formatCount(stargazersCount)} stars</Text>
        <Text style={styles.stat}>{ratingAverage}% rating</Text>
        <Text style={styles.stat}>{reviewCount} reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  language: {
    fontSize: 14,
    color: '#0366d6',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    fontSize: 14,
    color: 'gray',
  },
});

export default RepositoryItem;
