import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  useFonts,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

import Routes from './routes';
import { persistor, store } from './store';
import { AppThemeProvider } from './hooks/useTheme';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppThemeProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </AppThemeProvider>
    );
  }
}
