import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';

interface CreateButtonProps {
  isOpened: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape_light};

  width: 90%;
  height: 90px;

  position: absolute;
  bottom: 25px;
  right: 20px;
  left: 20px;
  border-radius: 25px;
`;

export const NavButtonsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  padding: 19px 23px;
`;

export const CreateButtonClickHandler = styled.TouchableWithoutFeedback``;

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

export const CreateActionsWrapper = styled.View`
  height: 100px;
  width: 100%;

  bottom: ${RFValue(80)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const CreateActions = styled(Animated.View)`
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
