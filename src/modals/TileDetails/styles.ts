import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const TabsContainer = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;
export const EditorContainer = styled.View`
  flex: 1;
  padding: 24px;
`;
export const CloseTabWrapper = styled.View`
  padding: 0 24px;
  margin-bottom: 24px;
  align-items: center;
`;
