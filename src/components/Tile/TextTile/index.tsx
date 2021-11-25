import React from 'react';

import TileContainer from '../TileContainer';

import { Container, Text } from './styles';

interface TextTileProps {
  onPress: () => void;
}

const TextTile: React.FC<TextTileProps> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <TileContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Text>
      </TileContainer>
    </Container>
  );
};

export default TextTile;
