import React from 'react';
import { Text, } from 'react-native';

const CustomText = ({
  size,
  color,
  spaced,
  style,
  children,
  regular,
  light,
  bold,
  medium,
  Latobold,
  ...rest
}) => {
  // Determine font weight
  let fontFamily = 'Roboto-Medium' // Default
  if (regular) fontFamily = 'Roboto-Regular'
  if (light) fontFamily = 'Roboto-Light'
  if (bold) fontFamily = 'Roboto-Bold'
  if (Latobold) fontFamily = 'Lato-Bold'
  if (medium) fontFamily = 'Roboto-Medium'

  let fontSize = 16;
  if (size) fontSize = size;

  //Determine font color
  let textColor = 'white';
  if (color) textColor = color;

  return (
    <Text
      {...rest}
      style={[
        { fontFamily, fontSize, color: textColor, textAlign: 'left', },
        style,

      ]}>
      {children}
    </Text>
  );
};


export default CustomText;
