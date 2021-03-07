import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    user: {
      imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
      name: 'Mr. Robot',
    },
    imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
    caption: 'Hello Mr. Robot!',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
      name: 'Mr. Robot',
    },
    imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
    caption: 'Hello Mr. Robot!',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
      name: 'Mr. Robot',
    },
    imageUri: 'https://randomuser.me/api/portraits/lego/1.jpg',
    caption: 'Hello Mr. Robot!',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
];
const Feed = () => {
  const RenderList = ({item}) => <Post post={item} />;

  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <RenderList key={item.id} item={item} />}
      ListHeaderComponent={<Stories />}
    />
  );
};

export default Feed;
