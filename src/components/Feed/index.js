import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import Post from '../Post';
import UserStoriesPreview from '../UserStoriesPreview';
import {listPosts} from '../../graphql/queries';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const RenderList = ({item}) => <Post post={item} />;
  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts)).then(
        (response) => {
          if (response.data) {
            setPosts(response.data.listPosts.items);
          }
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <RenderList key={item.id} item={item} />}
      ListHeaderComponent={<UserStoriesPreview />}
    />
  );
};

export default Feed;
