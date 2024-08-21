import React from 'react';
import { StyleSheet, View, } from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from './Text';
import { BlackColor} from '../../Src/utils/Constant';

const EmptyView = ({ message }) => {
    return (
        <View style={styles.emptyContainer}>
            <FastImage
                source={require('../../Shared/images/NoData.gif')}
                style={styles.emptyImage}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={{ color: BlackColor }}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',flex:1
    },
    emptyImage: {
        width: 200,
        height: 200, alignSelf: "center"
    },
});

export default React.memo(EmptyView);
