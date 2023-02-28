import React, { Suspense } from 'react';
import './components/utils/i18n';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ii18n from './components/utils/i18n';
import { I18nextProvider } from 'react-i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider Ii18n={Ii18n}>
      <Suspense fallback={<div>...Перевод</div>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
);
