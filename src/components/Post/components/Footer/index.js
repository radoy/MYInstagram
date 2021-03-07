import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    setIsLiked(!isLiked);

    const amountsLiked = isLiked ? -1 : 1;
    setLikesCount(likesCount + amountsLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.left}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <ADIcon
              name={isLiked ? 'heart' : 'hearto'}
              size={25}
              color={isLiked ? '#e73838' : '#5d5d5d'}
            />
          </TouchableWithoutFeedback>
          <FIcon name={'comment'} size={23} color={'#5d5d5d'} />
          <IIcon name={'paper-plane-outline'} size={25} color={'#5d5d5d'} />
        </View>
        <FAIcon name={'bookmark-o'} size={25} color={'#5d5d5d'} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.likesCount}>{likesCount} Likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
      </View>
    </View>
  );
};

export default Footer;
