import React, { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList, ActivityIndicator,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import axios from '../../../utils/axios';
import SingleComment from './SingleComment';
import Toast from 'react-native-toast-message';
export default CommentsView = React.memo(({ ListHeaderComponent }) => {
    const SelectedPost = useSelector((state) => state.Posts.SelectedPost);
    const [Comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [allComments, setAllComments] = useState([]);
    const [loadingMore, setLoadingMore] = useState(true); 
    const CommentsPerPage = 10;

    const getPostComments = useCallback(async () => {
        try {
            const response = await axios(`https://jsonplaceholder.org/comments?postId=${SelectedPost.id}`, 'GET');
            setAllComments(response.data);
            setComments(response.data.slice(0, CommentsPerPage));
        } catch (err) {
            const errorCode = err.response?.data?.cod;
            const errorMessage = errorCode === '404' ? err.response.data.message : 'Sorry, something went wrong';
            Toast.show({
                type: 'error',
                text1:errorMessage,
              });
        } finally {
            setLoadingMore(false);
        }
    }, [SelectedPost.id]);



    useEffect(() => {
        if (SelectedPost.id) {
            getPostComments();
        }
    }, [SelectedPost.id, getPostComments]);


    // load comment 10 by 10
    const loadMoreComment = useCallback(() => {
        if (loadingMore || Comments.length >= allComments.length) return; // Prevent triggering if already loading or all comments loaded
        setLoadingMore(true);
        const nextPage = page + 1;
        const startIndex = (nextPage - 1) * CommentsPerPage;
        const endIndex = startIndex + CommentsPerPage;
        const nextComments = allComments.slice(startIndex, endIndex);
        if (nextComments.length > 0) {
            setComments((prevComments) => [...prevComments, ...nextComments]);
            setPage(nextPage);
        }
        setLoadingMore(false);
    }, [loadingMore, Comments, allComments, page]);

    const renderComment = useCallback(({ item }) => <SingleComment item={item} />, []);

    const renderFooter = useCallback(() => {
        if (!loadingMore) return null;
        return <ActivityIndicator size="large" />;
    }, [loadingMore]);

    return (

        
        <FlatList
            data={Comments}
            renderItem={renderComment}
            ListHeaderComponent={ListHeaderComponent}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={renderFooter}
            onEndReached={loadMoreComment}
            onEndReachedThreshold={0.1} 
            contentContainerStyle={styles.contentContainerStyle}
        />
    );
});

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingBottom: 100, 
    },
});