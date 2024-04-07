import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {UserActionsStyleSheet} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { iconset } from '../sampleData';

export interface IUserActions {
  onReject: () => void;
  onLike: () => void;
}

export const UserActions: FC<IUserActions> = ({onReject, onLike}) => {
  const handlePressReject = () => {
    onReject();
  };
  const handlePressHeart = () => {
    onLike();
  };
  const handlePressWeChat = () => {
    
  };

  return (
    <View style={[UserActionsStyleSheet.wrapper]}>
      <View
        style={[
          UserActionsStyleSheet.iconWrapper,
          UserActionsStyleSheet.closeWrapper,
        ]}>
        <TouchableOpacity onPress={handlePressReject}><Image source={iconset.close} style={UserActionsStyleSheet.userActionStyles} /></TouchableOpacity>
      </View>

      <View
        style={[
          UserActionsStyleSheet.iconWrapper,
          UserActionsStyleSheet.heartWrapper,
        ]}>
        <TouchableOpacity onPress={handlePressHeart}><Image source={iconset.heart} style={UserActionsStyleSheet.heartActionStyles} /></TouchableOpacity>
      </View>
      <View
        style={[
          UserActionsStyleSheet.iconWrapper,
          UserActionsStyleSheet.chatWrapper,
        ]}>
        <TouchableOpacity onPress={handlePressWeChat}><Image source={iconset.chat} style={UserActionsStyleSheet.userActionStyles} /></TouchableOpacity>
      </View>
    </View>
  );
};