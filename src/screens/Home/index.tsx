import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import FavouriteCollection from '../../components/Collection/FavouriteCollection';
import CollectionListItem from '../../components/Collection/CollectionListItem';
import type { Collection } from '../../utils/models';
import api from '../../services/apiClient';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Subtitle,
  InvisibleButton,
  FavouritesWrapper,
  CollectionListWrapper,
  CollectionList,
} from './styles';

const fetchCollections = async (): Promise<Collection[]> => {
  const response = await api.get('/collection');

  return response.data;
};

const Home: React.FC = () => {
  const [collectionList, setCollectionList] = useState<Collection[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const fetchedCollectionList = await fetchCollections();
      setCollectionList(fetchedCollectionList);
    })();
  }, [setCollectionList]);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Collections</Title>
          <Subtitle>Total 10 collections</Subtitle>
        </TitleWrapper>
        <InvisibleButton>+ New Collection</InvisibleButton>
      </Header>

      <FavouritesWrapper>
        {collectionList &&
          collectionList.map(collection => (
            <FavouriteCollection
              key={collection.id}
              onPress={() => {
                navigation.navigate('Collection' as never);
              }}
            />
          ))}
      </FavouritesWrapper>

      <CollectionListWrapper>
        <CollectionList
          data={collectionList}
          keyExtractor={(item: Collection) => item.id}
          renderItem={({ item: Collection }) => <CollectionListItem />}
        />
      </CollectionListWrapper>
    </Container>
  );
};

export default Home;
