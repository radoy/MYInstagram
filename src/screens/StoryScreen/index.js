import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
} from 'react-native';
// import {useRoute, useNavigation} from '@react-navigation/native';
import storiesData from '../../data/stories';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StoryScreen = ({route, navigation}) => {
  // const route = useRoute();
  // const navigation = useNavigation();

  const userId = route.params.userId;
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const handlePress = (e) => {
    const width = Dimensions.get('window').width / 2;
    const x = e.nativeEvent.locationX;

    if (x < width) {
      handlePrevStory();
    } else {
      handleNexStory();
    }
  };

  const handleNexStory = () => {
    if (
      userStories.stories &&
      activeStoryIndex < userStories.stories.length - 1
    ) {
      setActiveStoryIndex(activeStoryIndex + 1);
      return;
    }

    navigateToNextUser();
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
      return;
    }

    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const navigateToPrevUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  useEffect(() => {
    const userStoriesData = storiesData.find(
      (storyData) => storyData.id === userId,
    );

    setUserStories(userStoriesData);
    setActiveStoryIndex(0);
  }, []);

  if (!userStories || userStories.stories.length < 1) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <ImageBackground
        style={styles.image}
        source={{uri: activeStory.imageUri}}>
        <View style={styles.userInfo}>
          <ProfilePicture uri={userStories.user.imageUri} size={50} />
          <Text style={styles.userName}>{userStories.user.name}</Text>
          <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Feather
            name="camera"
            style={styles.cameraIcon}
            size={25}
            color={'#ffffff'}
          />
          <TextInput
            style={styles.textInput}
            editable
            placeholder={'Send message ...'}
            placeholderTextColor={'white'}
          />
          <Ionicons
            name="paper-plane-outline"
            style={styles.messageIcon}
            size={35}
            color={'#ffffff'}
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
export default StoryScreen;
