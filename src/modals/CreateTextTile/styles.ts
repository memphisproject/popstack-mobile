import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const EditorContainer = styled.View`
  flex: 1;
  padding: 24px;
`;

export const CloseModalWrapper = styled.View`
  padding: 0 24px;
  margin-bottom: 24px;
  align-items: center;
`;
