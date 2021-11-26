import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const NavBarWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;
export const NavBar = styled.View`
  background-color: ${({ theme }) => theme.colors.shape_light};

  width: 90%;
  height: 90px;

  position: absolute;
  bottom: 25px;
  right: 20px;
  left: 20px;
  border-radius: 25px;
`;

export const NavButtonsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  padding: 19px 23px;
`;

export const CreateActionsWrapper = styled.View`
  height: 100px;
  width: 100%;

  bottom: ${RFValue(80)}px;
  align-items: center;
  justify-content: flex-end;
`;
