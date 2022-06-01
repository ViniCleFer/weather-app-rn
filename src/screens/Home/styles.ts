import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 20px 0;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() - 10 : 40}px;
`;

export const List = styled.FlatList.attrs({})`
  flex: 1;
  /* padding-bottom: 40px; */
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 100%;
`;
