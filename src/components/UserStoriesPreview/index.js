import React from 'react';
import {FlatList} from 'react-native';
import UserStoryPreview from '../UserStoryPreview';
import styles from './styles';
import stories from '../../data/stories';

const UserStoriesPreview = () => {
  const RenderList = ({item}) => <UserStoryPreview story={item} />;

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
