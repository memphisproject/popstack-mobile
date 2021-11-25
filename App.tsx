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
import AppProvider from './src/hooks';

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
      <AppProvider>
        {/*<Home />*/}
        <Collection />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
