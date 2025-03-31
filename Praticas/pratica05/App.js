import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SettingsScreen from './screens/SettingsScreen';

function App() {
  return (
    <SafeAreaProvider>
      <SettingsScreen />
    </SafeAreaProvider>
  );
}

export default App;