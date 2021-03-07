import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    alignSelf: 'center',
    fontWeight: '700',
    color: '#3e3e3e',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    marginRight: 15,
  },
});

export default styles;
