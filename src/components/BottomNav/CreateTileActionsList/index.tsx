import React from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import { useTileActions } from '../../../hooks/useTileActions';

import { Container, ActionWrapper, ActionIcon, Action } from './styles';

interface CreateActionsProps {
  isOpen: 0 | 1;
}

const CreateTileActionList: React.FC<CreateActionsProps> = ({ isOpen }) => {
  const animation = useAnimatedStyle(() => ({
    opacity: interpolate(isOpen, [0.9, 1], [0, 1], Extrapolate.CLAMP),
    transform: [
      {
        translateY: mix(isOpen, 80, 0),
      },
      {
        scale: interpolate(isOpen, [0.9, 1], [0, 1], Extrapolate.CLAMP),
      },
    ],
  }));
  const { createTile } = useTileActions();

  return (
    <Container style={animation}>
      <ActionWrapper onPress={() => createTile('textTile')}>
        <ActionIcon name="copy" />
        <Action>Create Tile</Action>
      </ActionWrapper>
      <ActionWrapper onPress={() => createTile('textTile')}>
        <ActionIcon name="copy" />
        <Action>Create Link Tile</Action>
      </ActionWrapper>
      <ActionWrapper onPress={() => createTile('textTile')}>
        <ActionIcon name="copy" />
        <Action>Create Query Tile</Action>
      </ActionWrapper>
    </Container>
  );
};

export default CreateTileActionList;
