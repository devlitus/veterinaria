import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValue] = useState(initialState);

  const reset = () => setValue(initialState);
  const handleInputChange = ({ target }) => {
    setValue({
      ...values,
      [target.name]: target.value
    });
  };
  const handleInputUpdate = (paciente) => {
    setValue(paciente);
  };
  return [values, handleInputChange, reset, handleInputUpdate];
};