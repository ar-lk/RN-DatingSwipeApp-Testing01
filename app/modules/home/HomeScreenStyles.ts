import {StyleSheet} from 'react-native';
import { Colors } from '../../theme';

const styles = StyleSheet.create({
  wrapper: {},
  appLogo: {
    width: 200,
    height: 30,
  },
  choiceContainer: {
    position: 'absolute',
    top: -100,
  },
  likeContainer: {
    left: 0,
    transform: [{rotate: '-30deg'}],
  },
  nopeContainer: {
    right: 0,
    transform: [{rotate: '30deg'}],
  },
  userInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 30,
  },
  discoverWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '95%',
    marginTop: -50,
  },
  discoverTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 0,
  },
  discoverBody: {},
  resetIconStyles: {
    height: 40,
    width: 40,
    opacity: 0.4,
  },
  userDuration: {
    color: Colors.white,
    fontSize: 18,
    marginTop: 10,
  }
});

export default styles;