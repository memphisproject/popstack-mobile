import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(Animated.View)`
  background-color: ${({ theme }) => theme.colors.accent_color};
  border-radius: 20px;
  padding: 15px 15px;
`;

export const ActionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ActionIcon = styled(Feather)`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_reverse};

  margin-right: 10px;
`;
export const Action = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;
