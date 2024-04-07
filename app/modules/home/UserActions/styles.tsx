import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';

export const UserActionsStyleSheet = StyleSheet.create({
  wrapper: {
    top: 260,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    borderRadius: 40,
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
    padding: 15,
  },
  closeIcon: {
    width: 45,
  },
  closeIconContent: {
    width: 30,
    fontSize: 30,
    color: '#F31559',
    marginLeft: 3,
  },
  heartIcon: {
    width: 60,
  },
  heartIconContent: {
    width: 50,
    fontSize: 50,
    color: 'white',
  },
  chatIcon: {
    width: 45,
  },
  chatIconContent: {
    width: 30,
    fontSize: 30,
    color: '#3085C3',
  },
  closeWrapper: {
    backgroundColor: 'white',
  },
  chatWrapper: {
    backgroundColor: 'white',
  },
  heartWrapper: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
  },
  userActionStyles: {
    height: 25,
    width: 25,
  },
  heartActionStyles: {
    height: 40,
    width: 40,
  },
});