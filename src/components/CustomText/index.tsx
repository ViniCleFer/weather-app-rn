import React from 'react';
import { TextProps } from 'react-native';

import { useTheme } from '../../hooks/useTheme';

import { Text } from './styles';

export interface CustomTextProps extends TextProps {
  children: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
}

export function CustomText({
  children,
  fontSize,
  fontFamily,
  color,
  ...rest
}: CustomTextProps) {
  const { theme } = useTheme();
  return (
    <Text
      color={color || theme.BLACK}
      fontSize={fontSize}
      fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </Text>
  );
}
