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
import {API, graphqlOperation} from 'aws-amplify';
// import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {listStorys} from '../../graphql/queries';

const StoryScreen = ({route, navigation}) => {
  // const route = useRoute();
  // const navigation = useNavigation();

  const [stories, setStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      setStories(storiesData.data.listStorys.items);
    } catch (e) {
      console.log('error fetching stories: ', e);
    }
  };

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
    if (activeStoryIndex >= stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  useEffect(() => {
    fetchStories();
    setActiveStoryIndex(0);
  }, []);

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = stories[activeStoryIndex];

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <ImageBackground style={styles.image} source={{uri: activeStory.image}}>
        <View style={styles.userInfo}>
          <ProfilePicture uri={activeStory.user.image} size={50} />
          <Text style={styles.userName}>{activeStory.user.name}</Text>
          <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
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
