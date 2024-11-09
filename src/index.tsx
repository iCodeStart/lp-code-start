import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './AppWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <AppWrapper />
    </QueryClientProvider>
  </React.StrictMode>
);