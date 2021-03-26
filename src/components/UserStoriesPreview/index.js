import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import UserStoryPreview from '../UserStoryPreview';
import styles from './styles';
import {listStorys} from '../../graphql/queries';

const UserStoriesPreview = () => {
  const [stories, setStories] = useState([]);
  const RenderList = ({item}) => <UserStoryPreview story={item} />;
  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys)).then(
        (response) => {
          if (response.data) {
            setStories(response.data.listStorys.items);
          }
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={stories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <RenderList key={item.id} item={item} />}
    />
  );
};

export default UserStoriesPreview;
