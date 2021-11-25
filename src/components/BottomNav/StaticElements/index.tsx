import React from 'react';

import { Container, Icon } from './styles';

interface StaticElementProps {
  icon: string;
  onPress: () => void;
}

const StaticElement: React.FC<StaticElementProps> = ({ icon, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Icon name={icon} />
    </Container>
  );
};

export default StaticElement;
