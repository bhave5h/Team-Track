import { Toaster as SonnerToaster } from 'sonner';
import React from 'react';

export const Toaster = () => {
  return (
    <SonnerToaster 
      position="bottom-right"
      closeButton
      theme="light"
    />
  );
};
