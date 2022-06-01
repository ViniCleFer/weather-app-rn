import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CustomTextProps } from '.';

export const Text = styled.Text`
  font-size: ${(props: CustomTextProps) => RFValue(props.fontSize)}px;
  font-family: ${(props: CustomTextProps) => props.fontFamily || 'regular'};
  color: ${(props: CustomTextProps) => props.color};
`;
