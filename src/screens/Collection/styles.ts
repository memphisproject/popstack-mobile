import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.View`
  width: 80%;
`;

export const Title = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 2,
})`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(24)}px;
`;

export const CategoriesList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  max-height: ${RFValue(25)}px;
  margin-top: ${RFValue(5)}px;
`;

export const SocialMetricsBar = styled.View`
  margin-top: ${RFValue(10)}px;
  width: 100%;
  padding: 5px ${RFPercentage(10)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SocialMetric = styled.View`
  justify-content: center;
  align-items: center;

  margin-right: ${RFValue(10)}px;
`;

export const SocialMetricIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const SocialMetricLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TilesListWrapper = styled.View`
  margin-top: ${RFValue(10)}px;
  padding: 0 24px;
`;
