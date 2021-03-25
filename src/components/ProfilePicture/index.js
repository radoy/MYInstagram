import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, size = 70}) => {
  return (
    <View style={styles.container(size + 6)}>
      <Image
        style={styles.image(size)}
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default ProfilePicture;
