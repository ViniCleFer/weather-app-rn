import React from 'react';
import { StatusBar as StatusBarExpo } from 'expo-status-bar';

import { useTheme } from '../../hooks/useTheme';

export const StatusBar = () => {
  const { theme } = useTheme();

  return (
    <StatusBarExpo
      style={theme.THEME_TYPE === 'dark' ? 'light' : 'dark'}
      translucent
    />
  );
};
