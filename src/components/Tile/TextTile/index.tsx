import React from 'react';
import { useFragment } from 'react-relay';
import { graphql } from 'react-relay/hooks';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import TileContainer from '../TileContainer';
import type {
  TextTile_tiles,
  TextTile_tiles$key,
} from '../../../__generated__/TextTile_tiles.graphql';

import { Container } from './styles';

interface TextTileProps {
  onPress: () => void;
  tile: TextTile_tiles$key;
}

const TextTile: React.FC<TextTileProps> = ({ onPress, tile }) => {
  const { width } = useWindowDimensions();
  const data: TextTile_tiles = useFragment(
    graphql`
      fragment TextTile_tiles on tiles {
        content
      }
    `,
    tile,
  );

  return (
    <Container onPress={onPress}>
      <TileContainer>
        <RenderHtml contentWidth={width} source={data.content} />
      </TileContainer>
    </Container>
  );
};

export default TextTile;
