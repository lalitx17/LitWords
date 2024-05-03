import { createContext } from 'react';
import type {Dispatch, SetStateAction} from 'react';



// Define the type for Form state
export type formState = {
  title: string;
  content: string;
  tags: string;
};

// Create a context
export const formContext = createContext<{
  formData: formState;
  setFormData: Dispatch<SetStateAction<formState>>;
} | undefined>(undefined);