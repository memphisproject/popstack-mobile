import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape_light};

  padding: 4px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const CategoryText = styled.Text`
  padding: 2px;

  color: ${({ theme }) => theme.colors.text_reverse};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
