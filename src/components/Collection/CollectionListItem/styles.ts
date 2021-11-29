import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 15px;
  padding: 17px 24px;
  margin-bottom: 16px;

  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.View``;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const LastUpdated = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const LogoWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.accent_light1};

  padding: 10px 20px;
  border-radius: 10px;
`;
export const Logo = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
