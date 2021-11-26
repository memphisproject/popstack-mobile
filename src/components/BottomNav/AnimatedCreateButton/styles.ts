import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface CreateButtonProps {
  isOpened: boolean;
}

export const Container = styled.TouchableWithoutFeedback``;

export const CreateButtonWrapper = styled(Animated.View)<CreateButtonProps>`
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent_color};

  padding: 10px;
  border-radius: ${({ isOpened }) => (isOpened ? '5' : '25')}px;
`;

export const CreateButton = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_reverse};
`;
