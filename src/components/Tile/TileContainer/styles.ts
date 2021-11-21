import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const IconWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.accent_color};

  border-radius: 5px;
  padding: 2px;
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_reverse};
  font-size: ${RFValue(15)}px;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 15px;
  padding: 17px 24px;
  margin-bottom: 16px;
`;
