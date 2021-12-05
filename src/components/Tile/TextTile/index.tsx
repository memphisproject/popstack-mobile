import React from 'react';
import { useFragment } from 'react-relay';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

import TileContainer from '../TileContainer';
import type { TilesTextFrag_collections$key } from '../../../__generated__/TilesTextFrag_collections.graphql';
import { textTileFragment } from '../../../relay/queries/Tiles';

import { Container } from './styles';

interface TextTileProps {
  onPress: () => void;
  tile: TilesTextFrag_collections$key;
}

const TextTile: React.FC<TextTileProps> = ({ onPress, tile }) => {
  const { width } = useWindowDimensions();
  const data = useFragment(textTileFragment, tile);

  return (
    <Container onPress={onPress}>
      <TileContainer>
        <RenderHtml contentWidth={width} source={data?.tile?.content} />
      </TileContainer>
    </Container>
  );
};

export default TextTile;
