import React from 'react';
import {Text, Image} from 'react-native';
import styles from './styles';

const Body = ({imageUri}) => {
  return <Image style={styles.image} source={{uri: imageUri}} />;
};

export default Body;
