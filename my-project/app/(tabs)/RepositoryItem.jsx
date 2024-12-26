// src/components/RepositoryItem.jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
      <View style={styles.details}>
        <Text style={styles.fullName}>{repository.fullName}</Text>
        <Text style={styles.description}>{repository.description}</Text>
        <Text style={styles.language}>Language: {repository.language}</Text>
        <Text>Forks: {repository.forksCount}</Text>
        <Text>Stars: {repository.stargazersCount}</Text>
        <Text>Rating: {repository.ratingAverage}</Text>
        <Text>Reviews: {repository.reviewCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  language: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 4,
  },
});

export default RepositoryItem;
