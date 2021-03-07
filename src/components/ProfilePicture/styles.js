import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: (isDefault) => ({
    height: isDefault ? 75 : 40,
    width: isDefault ? 75 : 40,
    margin: 7,
    borderRadius: isDefault ? 35 : 20,
    borderWidth: 3,
    borderColor: '#ae22e0',
  }),
  image: (isDefault) => ({
    width: isDefault ? 69 : 34,
    height: isDefault ? 69 : 34,
    borderRadius: isDefault ? 35 : 17,
    borderWidth: 1,
    borderColor: '#ffffff',
  }),
});

export default styles;
