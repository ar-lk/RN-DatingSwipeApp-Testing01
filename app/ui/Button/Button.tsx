import React, {FC} from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import {ButtonStyleSheet} from './styles';

export interface IButton {
  styles?: Record<string, any>;
  maxWidth?: number;
  text: string;
  colors?: (string | number)[];
  onPress?: (event: GestureResponderEvent) => void;
  isDisable?: boolean;
}
export const Button: FC<IButton> = ({
  styles,
  maxWidth,
  text,
  onPress,
  colors = ['#ad56ff', '#ad56ff'],
  isDisable = false,
}) => {
  const buttonWrapper = {
    maxWidth,
    ...styles,
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={isDisable}>
      <Text style={[ButtonStyleSheet.content]}>{text}</Text>
    </TouchableOpacity>
  );
};