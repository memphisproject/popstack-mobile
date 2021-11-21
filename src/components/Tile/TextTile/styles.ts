import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
