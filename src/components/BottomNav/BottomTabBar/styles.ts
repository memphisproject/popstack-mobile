import styled from 'styled-components/native';

export const Container = styled.View`
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
