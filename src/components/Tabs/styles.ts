import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TabProps {
  isActive: boolean;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape_light};

  padding: 5px 0;
  border-radius: ${RFValue(25)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const TabWrapper = styled.TouchableOpacity<TabProps>`
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.shape_light};
    `}
  border-radius: 20px;
  padding: 10px ${RFValue(25)}px;
`;
export const Tab = styled.Text<TabProps>`
  color: ${({ theme, isActive }) =>
    !isActive ? theme.colors.text_light : theme.colors.text_reverse};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
