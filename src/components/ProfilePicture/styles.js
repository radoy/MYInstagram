import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: (size) => ({
    height: size,
    width: size,
    margin: 7,
    borderRadius: size / 2,
    borderWidth: 3,
    borderColor: '#ae22e0',
  }),
  image: (size) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 1,
    borderColor: '#ffffff',
  }),
});

export default styles;
