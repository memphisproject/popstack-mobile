import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableWithoutFeedback``;
export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;
