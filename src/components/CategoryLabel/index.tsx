import React from 'react';

import { Container, CategoryText } from './styles';

interface CategoryLabelProps {
  text: string;
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ text }) => {
  return (
    <Container>
      <CategoryText>{text}</CategoryText>
    </Container>
  );
};

export default CategoryLabel;
