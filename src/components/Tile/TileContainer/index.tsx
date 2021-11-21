import type { ReactNode } from 'react';
import React from 'react';

import { Container, Header, Icon, IconWrapper } from './styles';

interface TileContainerProps {
  children: ReactNode;
}

const TileContainer: React.FC<TileContainerProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <IconWrapper>
          <Icon name="message-circle" />
        </IconWrapper>
      </Header>
      {children}
    </Container>
  );
};

export default TileContainer;
