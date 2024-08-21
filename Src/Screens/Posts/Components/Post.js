import React, { useCallback } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import Text from '../../../../Shared/Components/Text';
import {  BlueColor, Lfont, Mfont, screenHeight } from '../../../utils/Constant';
import FastImage from 'react-native-fast-image';
const Post = React.memo(({ item, onPress }) => {
  const { title, slug, category, publishedAt, status,image} = item;
  const handlePress = useCallback(() => {
    onPress(item);
  }, [item, onPress]);

// rendered data ineed 
  return (
    <Pressable onPress={handlePress} style={styles.container}>
    <View style={styles.imageContainer}>
      <FastImage source={{uri:image}} style={styles.image} />
    </View>
    <View style={styles.content}>
      <Text size={Lfont} style={styles.title}>{title}</Text>

      <View style={styles.infoRow}>
        <Text size={Mfont} style={styles.label}>slug: </Text>
        <Text size={Mfont} style={styles.value}>{slug}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text size={Mfont} style={styles.label}>category: </Text>
        <Text size={Mfont} style={styles.value}>{category}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text size={Mfont} style={styles.label}>publishedAt: </Text>
        <Text size={Mfont} style={styles.value}>{publishedAt}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text size={Mfont} style={styles.label}>status: </Text>
        <Text size={Mfont} style={styles.value}>{status}</Text>
      </View>
    </View>
  </Pressable>
  );
});

export default Post;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: '1%',
  },  imageContainer: {
    width: '100%',
    height: screenHeight / 4,
  },
  image: {
    width: '100%',
    height: '100%',borderRadius:8,borderWidth:1,borderColor:"transparent"
  },
  content: {
    padding: 10,
  },
  title: {
    color: '#000',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: '1%',
  },
  label: {
    color: '#535353',
  },
  value: {
    color: BlueColor,
  },
});