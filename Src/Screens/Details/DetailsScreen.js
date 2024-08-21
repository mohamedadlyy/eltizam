import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../../Shared/Components/Header';
import { useSelector } from 'react-redux';
import CommentsView from './Components/CommentsView';
import PostDetils from './Components/PostDetils';

const DetailsScreen = ({ route, navigation }) => {
    // get the selected post from global state
    const SelectedPost = useSelector((state) => state.Posts.SelectedPost);
    // get post from route if you not need to store in the global state
    const { post } = route.params;
    return (
        <View style={styles.container}>
            <Header back={navigation.goBack} title={SelectedPost.title} />
            <View style={{ paddingHorizontal: "3%" }}>
                <CommentsView
                    ListHeaderComponent={() => <PostDetils SelectedPost={SelectedPost} />}
                />
            </View>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative', backgroundColor: "#fff"
    },
});
