import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { Text } from 'react-native';

import theme from './src/global/styles/theme';
// import darkTheme from './src/global/styles/dark-theme';
import AppProvider from './src/hooks';
import AppRoutes from './src/routes/app.routes';
import relayClient from './src/services/relayClient';

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
    <RelayEnvironmentProvider environment={relayClient}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <NavigationContainer>
            <Suspense fallback={<Text>loading App...</Text>}>
              <AppRoutes />
            </Suspense>
          </NavigationContainer>
        </AppProvider>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  );
};

export default App;
