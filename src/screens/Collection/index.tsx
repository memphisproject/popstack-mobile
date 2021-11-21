import React from 'react';

import { Container, Header, Title, TitleWrapper, Icon } from './styles';

const Collection: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>My personal Instagram about psychology</Title>
        </TitleWrapper>

        <Icon name="info" />
      </Header>
    </Container>
  );
};

export default Collection;
