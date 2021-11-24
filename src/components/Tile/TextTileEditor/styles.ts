import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

export const Container = styled(SafeAreaView)`
  width: 100%;
  flex: 1;
`;

export const Editor = styled(RichEditor)`
  flex: 1;
  border-radius: 15px;
`;

export const Toolbar = styled(RichToolbar)`
  border-radius: 15px;
  margin-top: 10px;
`;
