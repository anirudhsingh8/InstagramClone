import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Navigator } from './navigation/Navigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter_18pt-Black.ttf'),
    'Inter-Black-Italic': require('./assets/fonts/Inter_18pt-BlackItalic.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter_18pt-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Navigator />;
}