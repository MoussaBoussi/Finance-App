import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Navigator } from 'navigation';

const App: React.FC = () => (
  <ThemeProvider>
    <Navigator />
  </ThemeProvider>
);

export default App;
