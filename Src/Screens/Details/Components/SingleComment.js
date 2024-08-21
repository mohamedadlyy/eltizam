import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default SingleComment = React.memo(({ item }) => {
  const { userId, comment } = item; 

  return (
    <View style={styles.commentContainer}>
      <Text style={styles.username}>userId: {userId}</Text>
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
});

