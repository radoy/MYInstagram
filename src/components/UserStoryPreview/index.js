import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const UserStoryPreview = ({story}) => {
  const {
    id,
    user: {imageUri, name},
  } = story;
  const navigation = useNavigation();

  const onPress = () => {
    console.log(`${name} story pressed`);

    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
