import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.View`
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InvisibleButton = styled.Text`
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const FavouritesWrapper = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  position: absolute;
  width: 100%;
  margin-top: ${RFPercentage(20)}px;
`;

export const CollectionListWrapper = styled.View`
  flex: 1%;
  padding: 0 24px;

  margin-top: ${RFPercentage(30)}px;
`;