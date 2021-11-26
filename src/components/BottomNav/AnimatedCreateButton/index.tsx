import React from 'react';
import { useAnimatedStyle } from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import { Container, CreateButtonWrapper, CreateButton } from './styles';

interface AnimatedCreateButtonProps {
  onPress: () => void;
  isOpen: 0 | 1;
}

const AnimatedCreateButton: React.FC<AnimatedCreateButtonProps> = ({
  onPress,
  isOpen,
}) => {
  const animation = useAnimatedStyle(() => ({
    transform: [{ rotate: `${mix(isOpen, Math.PI / 4, 0)}rad` }],
  }));

  return (
    <Container onPress={onPress}>
      <CreateButtonWrapper style={animation} isOpened={!!isOpen}>
        <CreateButton name="x" />
      </CreateButtonWrapper>
    </Container>
  );
};

export default AnimatedCreateButton;
