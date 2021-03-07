import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  image: {
    width: width,
    height: width,
    resizeMode: 'contain',
  },
});

export default styles;
