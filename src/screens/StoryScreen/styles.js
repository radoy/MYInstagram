import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  userName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  postedTime: {
    color: 'lightgray',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
  bottomContainer: {
    marginBottom: 30,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    marginHorizontal: 10,
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
  },
  cameraIcon: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 7,
    width: 40,
  },
  messageIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
