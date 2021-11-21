import React from 'react';

import TileContainer from '../TileContainer';

import { Text } from './styles';

const TextTile: React.FC = () => {
  return (
    <TileContainer>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </Text>
    </TileContainer>
  );
};

export default TextTile;
