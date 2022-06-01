import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  /* align-items: center; */
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  flex-direction: column;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 40 : 40}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const HeaderItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentInfos = styled.View`
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
`;

export const ContainerGraus = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;
  padding: 30px 0;
`;

export const Icon = styled.Image`
  margin-left: 14px;
  width: 80px;
  height: 80px;
`;

export const ArrowBack = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-self: flex-start;
`;
