import React from 'react';
import {Image, Text, View} from 'react-native';
import {UnavailableUsersStyleSheet} from './styles';

export const UnavailableUsers = () => {
  return (
    <View style={[UnavailableUsersStyleSheet.wrapper]}>
      <Image
        style={UnavailableUsersStyleSheet.image}
        source={{
          uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/empty-box-6219421-5102419.png',
        }}
      />
      <Text style={UnavailableUsersStyleSheet.text}>
        There are not more meows to show for today
      </Text>
    </View>
  );
};