import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import theme from './src/global/styles/theme';
import darkTheme from './src/global/styles/dark-theme';
import { Home } from './src/screens/Home';
import Collection from './src/screens/Collection';
import TileDetails from './src/modals/TileDetails';

const App: React.FC = () => {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      {/*<Home />*/}
      {/*<Collection />*/}
      <TileDetails />
    </ThemeProvider>
  );
};

export default App;
