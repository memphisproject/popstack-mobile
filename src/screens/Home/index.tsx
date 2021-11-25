import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FavouriteCollection from '../../components/FavouriteCollection';
import CollectionListItem from '../../components/CollectionListItem';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Subtitle,
  InvisibleButton,
  FavouritesWrapper,
  CollectionListWrapper,
} from './styles';

export interface Collections {
  id: string;
  title: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Collections</Title>
          <Subtitle>Total 10 collections</Subtitle>
        </TitleWrapper>
        <InvisibleButton>+ New Collection</InvisibleButton>
        {/*<InvisibleButton />*/}
      </Header>

      <FavouritesWrapper>
        <FavouriteCollection
          onPress={() => {
            navigation.navigate('Collection' as never);
          }}
        />
        <FavouriteCollection
          onPress={() => {
            navigation.navigate('Collection' as never);
          }}
        />
        <FavouriteCollection
          onPress={() => {
            navigation.navigate('Collection' as never);
          }}
        />
      </FavouritesWrapper>

      <CollectionListWrapper>
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
      </CollectionListWrapper>
    </Container>
  );
};

export default Home;
