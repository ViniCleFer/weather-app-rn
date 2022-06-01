import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CustomText } from '../CustomText';

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${RFValue(15)}px;
`;

export const Title = styled(CustomText)``;

export const ToggleThemeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
