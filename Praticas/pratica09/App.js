import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StoreProvider } from './contexts/StoreContext';
import { MainNavigator } from './routes/MainNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
}