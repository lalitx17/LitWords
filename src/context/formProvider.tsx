import React, { useState } from 'react';
import { formContext } from './formContext';
import type { formState } from './formContext';

// Create a provider component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const initialStateFormData = {
    title: '',
    content: '',
    tags: ""
    };


  const [formData, setFormData] = useState<formState>(initialStateFormData);

  return (
    <formContext.Provider value={{ formData, setFormData }}>
      {children}
    </formContext.Provider>
  );
};

// Export the formProvider
export default FormProvider;
