import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { BlackColor, BlueColor, GreyColor, Lfont, Mfont, screenHeight } from '../../../utils/Constant';
import Text from '../../../../Shared/Components/Text';
export default  PostDetils = React.memo(({ SelectedPost }) => {
    const { title, content,image } = SelectedPost; // Destructure to avoid repeated access

    return (
        <View style={styles.container}>
            <FastImage
                source={{uri:image}}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}
            />
            <Text size={Lfont} style={styles.title}>{title}</Text>
            <Text size={Mfont} style={styles.content}>{content}</Text>
            <Text size={Lfont} style={styles.commentsLabel}>Comments:</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        marginVertical: '2%',
    },
    image: {
        width: '100%',
        height: screenHeight / 5,
        marginVertical: '1%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'transparent',
    },
    title: {
        color: BlackColor,
        textAlign: 'left',
    },
    content: {
        color: GreyColor,
        textAlign: 'left',
        marginTop: '1%',
    },
    commentsLabel: {
        color: BlueColor,
        textAlign: 'left',
        marginTop: '1%',
    },
});

 ;
