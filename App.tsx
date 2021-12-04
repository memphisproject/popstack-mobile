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

import theme from './src/global/styles/theme';
// import darkTheme from './src/global/styles/dark-theme';
import AppProvider from './src/hooks';
import AppRoutes from './src/routes/app.routes';
import { createRelayEnvironment } from './src/relay';
import { ResettableRelayProvider } from './src/relay/providers/ResettableRelayProvider';

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
        <ResettableRelayProvider
          createRelayEnvironment={createRelayEnvironment}
        >
          <NavigationContainer>
            <Suspense fallback={<AppLoading />}>
              <AppRoutes />
            </Suspense>
          </NavigationContainer>
        </ResettableRelayProvider>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
