import { useContext} from 'react';
import { formContext } from './formContext';


// Create a context

// Custom hook to access the context
export const useForm = () => {
  const context = useContext(formContext);
  if (!context) {
    throw new Error('useform must be used within an formProvider');
  }
  return context;
};
