import './index.css';

import { IntlProvider } from '@contexts/IntlContext/IntlProvider.tsx';
import { SidebarProvider } from '@contexts/SidebarContext/SidebarProvider.tsx';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext/AuthProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider>
      <NextUIProvider>
        <BrowserRouter>
          <AuthProvider>
            <SidebarProvider>
              <App />
            </SidebarProvider>
          </AuthProvider>
        </BrowserRouter>
      </NextUIProvider>
    </IntlProvider>
  </React.StrictMode>,
);
