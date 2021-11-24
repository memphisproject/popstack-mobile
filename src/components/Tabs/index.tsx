import React from 'react';

import { Container, TabWrapper, Tab } from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabWrapper isActive={true}>
        <Tab isActive={true}>Editor</Tab>
      </TabWrapper>
      <TabWrapper isActive={false}>
        <Tab isActive={false}>Comments</Tab>
      </TabWrapper>
      <TabWrapper isActive={false}>
        <Tab isActive={false}>History</Tab>
      </TabWrapper>
    </Container>
  );
};

export default Tabs;
