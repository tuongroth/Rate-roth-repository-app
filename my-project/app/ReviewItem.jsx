// components/ReviewItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  ratingContainer: { marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  rating: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  infoContainer: { flex: 1 },
  username: { fontWeight: 'bold', marginBottom: 5 },
  date: { color: '#555', marginBottom: 5 }
});

export default ReviewItem;
