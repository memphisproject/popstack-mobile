import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.accent_color};
  width: ${RFPercentage(30)}px;
  border-radius: 15px;
  padding: 19px 23px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalTileCount = styled.Text`
  color: ${({ theme }) => theme.colors.text_reverse};
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Title = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 3,
})`
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.text_reverse};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
