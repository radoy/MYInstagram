import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const UserStoryPreview = ({story}) => {
  const {
    id,
    user: {image, name},
  } = story;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
