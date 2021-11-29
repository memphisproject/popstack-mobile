import React from 'react';

import {
  Container,
  TitleWrapper,
  Title,
  LastUpdated,
  LogoWrapper,
  Logo,
} from './styles';

const CollectionListItem: React.FC = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Weekend Plans</Title>
        <LastUpdated>by 15:00 on Nov 21</LastUpdated>
      </TitleWrapper>
      <LogoWrapper>
        <Logo>:</Logo>
      </LogoWrapper>
    </Container>
  );
};

export default CollectionListItem;
