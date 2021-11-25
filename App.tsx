import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import theme from './src/global/styles/theme';
import AppProvider from './src/hooks';
import AppRoutes from './src/routes/app.routes';

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
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
