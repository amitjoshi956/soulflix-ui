import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
import i18n from 'config/i18n.config';
import { store } from 'core/store';
import App from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </StoreProvider>
    </React.StrictMode>
);
