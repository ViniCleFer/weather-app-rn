import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from '../../hooks/useTheme';
import { fonts } from '../../styles';

import { Container, Title, ToggleThemeButton } from './styles';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container>
      <Title color={theme.BLACK} fontSize={28} fontFamily={fonts.BOLD}>
        Weather
      </Title>
      <ToggleThemeButton onPress={toggleTheme}>
        <Feather
          name={theme.THEME_TYPE === 'dark' ? 'sun' : 'moon'}
          size={32}
          color={theme.BLACK}
        />
      </ToggleThemeButton>
    </Container>
  );
};
