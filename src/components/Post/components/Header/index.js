import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../../ProfilePicture';
import styles from './styles';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} isDefault={false} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Header;
