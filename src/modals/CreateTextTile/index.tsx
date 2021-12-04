import React from 'react';

import Button from '../../components/Button';
import TextTileEditor from '../../components/Tile/TextTileEditor';
import { useTileActions } from '../../hooks/useTileActions';

import { CloseModalWrapper, Container, EditorContainer } from './styles';

interface CreateTextTileProps {
  closeCreateTextTile: () => void;
}

const CreateTextTile: React.FC<CreateTextTileProps> = ({
  closeCreateTextTile,
}) => {
  const { saveTextTile } = useTileActions();

  const handleTextTileCreate = () => {
    saveTextTile();
    closeCreateTextTile();
  };

  return (
    <Container>
      <EditorContainer>
        <TextTileEditor />
      </EditorContainer>
      <CloseModalWrapper>
        <Button title="X" onPress={handleTextTileCreate} />
      </CloseModalWrapper>
    </Container>
  );
};

export default CreateTextTile;
