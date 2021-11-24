import React, { useRef } from 'react';
import type { RichEditor } from 'react-native-pell-rich-editor';

import { Container, Editor, Toolbar } from './styles';

const TextTileEditor: React.FC = () => {
  const editor = useRef<RichEditor>(null);
  const initHTML = '<p>this is a tile</p>';

  return (
    <Container>
      <Editor
        ref={editor}
        placeholder={'please input content'}
        initialContentHTML={initHTML}
        pasteAsPlainText={true}
      />

      <Toolbar editor={editor} />
    </Container>
  );
};

export default TextTileEditor;
