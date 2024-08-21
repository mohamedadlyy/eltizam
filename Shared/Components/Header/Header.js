import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from '../Text';
import { BlueColor, Lfont, screenHeight } from '../../../Src/utils/Constant';

const Header = ({ title, back }) => {
  return (
    <View style={styles.header}>
      <View style={styles.backButtonContainer}>
        {back ? (
          <Pressable onPress={back}>
            <FastImage
              source={require('../../../Shared/images/arrow_back.png')}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.arrow}
            />
          </Pressable>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>
      <Text numberOfLines={1} Latobold size={Lfont} style={styles.headerText}>
        {title}
      </Text>
      <View style={styles.rightSpace}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: BlueColor,
    alignItems: 'center',
    height: screenHeight/9,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '3%',
  },
  backButtonContainer: {
    width: 40, // Same width as the arrow image to ensure proper alignment
  },
  placeholder: {
    width: 40,
    height: 40,
  },
  headerText: {
    color: '#fff',
    flex: 1, // Allows the text to take up the remaining space
    textAlign: 'center',
  },
  arrow: {
    width: 40,
    height: 40,
  },
  rightSpace: {
    width: 40, // Placeholder space to balance the layout
  },
});

export default React.memo(Header);
