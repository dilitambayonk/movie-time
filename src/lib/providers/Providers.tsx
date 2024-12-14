'use client';

import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { cn } from '../utils';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

interface ProvidersProps {
  className?: string;
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children, className }) => {
  return (
    <div className={cn(className)}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default Providers;
