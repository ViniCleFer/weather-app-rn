import React from 'react';
import { CustomText } from '../../../../components/CustomText';
import { useTheme } from '../../../../hooks/useTheme';
import { fonts } from '../../../../styles';

import { Container } from './styles';

interface LineProps {
  label: string;
  value: string;
}

export const Line = ({ label, value }: LineProps) => {
  const { theme } = useTheme();

  return (
    <Container>
      <CustomText color={theme.DARK} fontSize={20} fontFamily={fonts.BOLD}>
        {`${label}: `}
      </CustomText>
      <CustomText color={theme.DARK} fontSize={20} fontFamily={fonts.REGULAR}>
        {value}
      </CustomText>
    </Container>
  );
};
