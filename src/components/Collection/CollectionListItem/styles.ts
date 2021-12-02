import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface logoWrapperProps {
  hasImage: boolean;
}

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 15px;
  padding: 17px 24px;
  margin-bottom: 16px;

  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  width: ${RFPercentage(30)}px;
`;
export const Title = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const LastUpdated = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const LogoWrapper = styled.View<logoWrapperProps>`
  background-color: ${({ theme }) => theme.colors.accent_light1};

  padding: ${({ hasImage }) => (!hasImage ? RFValue(10) : 0)}px;
  border-radius: 10px;
`;
export const Logo = styled.Image`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
  border-radius: 5px;
`;

export const LogoText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
