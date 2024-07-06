// src/App.tsx
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/services/i18n';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <AppNavigator />
    </I18nextProvider>
  );
};

export default App;
