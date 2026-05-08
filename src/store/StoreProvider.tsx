'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { makeStore, AppStore } from './store';

export default function StoreProvider({children}: {children: React.ReactNode;}) {
  const storeRef = useRef<AppStore | null>(null);
  const queryClientRef = useRef<QueryClient | null>(null);
  
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <Provider store={storeRef.current}>
      <QueryClientProvider client={queryClientRef.current}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
}