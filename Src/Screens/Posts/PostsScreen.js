import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Header from '../../../Shared/Components/Header';
import Post from './Components/Post';
import { useDispatch } from 'react-redux';
import { setSelectedPost } from './PostsSlice';
import axios from '../../utils/axios';
import Toast from 'react-native-toast-message';
import EmptyView from '../../../Shared/Components/EmptyView';
export default PostsScreen = React.memo(({ navigation }) => {
  const [allPosts, setAllPosts] = useState([]); // Store all posts
  const [posts, setPosts] = useState([]); // Store posts for the current page
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const postsPerPage = 10; // Number of posts per page

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios('https://jsonplaceholder.org/posts', 'GET');
      setAllPosts(response.data); // Store all fetched posts
      setPosts(response.data.slice(0, postsPerPage)); // Show the first 10 posts
    } catch (err) {
      console.log("err", err)
      const errorCode = err.response?.data?.cod;
      const errorMessage = errorCode === '404' ? err.response.data.message : 'Sorry, something went wrong';
      Toast.show({
        type: 'error',
        text1: errorMessage
      });
    } finally {
      setLoading(false);
    }
  }, [postsPerPage]);


  useEffect(() => {
    fetchPosts(); // Fetch all posts when the component mounts
  }, [fetchPosts]);


  // load posts by 10 
  const loadMorePosts = useCallback(() => {
    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const nextPosts = allPosts.slice(startIndex, endIndex);

    if (nextPosts.length > 0) {
      setPosts((prevPosts) => [...prevPosts, ...nextPosts]);
      setPage(nextPage);
    }
  }, [allPosts, page, postsPerPage]);


  const handlePostPress = useCallback((item) => {
    //store selected post in global state
    dispatch(setSelectedPost(item));
    // redirect to details screen and send post as param if not need to use redux to store the selected post
    navigation.navigate('DetailsScreen', { post: item });
  }, [dispatch, navigation]);


  const renderPost = useCallback(({ item }) => (
    <Post item={item} onPress={handlePostPress} />
  ), [handlePostPress]);


  const renderFooter = useCallback(() => {
    if (!loading) return null;
    return <ActivityIndicator size="large" />;
  }, [loading]);



  return (
    <View style={styles.container}>
      <Header title="Home" />
      {
        posts.length == 0 && !loading &&
        <EmptyView message={'Sorry no data found'} />
      }
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={loadMorePosts} // Load more posts when user scrolls to the end
        onEndReachedThreshold={0.5}
      />
    </View>
  );
});

;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

});
