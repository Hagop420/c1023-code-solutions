import { useContext } from 'react';
import { AppContext } from './AppContext';

export function useUser() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useUser must be used inside of the userProvider');
  }
  return context;
}
