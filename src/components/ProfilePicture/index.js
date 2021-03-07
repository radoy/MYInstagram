import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, isDefault = true}) => {
  return (
    <View style={styles.container(isDefault)}>
      <Image
        style={styles.image(isDefault)}
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default ProfilePicture;
