import { ChangeEvent, useState } from 'react';

const useForm = <T extends object = object>(
  initialState: T
): [
  T,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] => {
  const [state, setState] = useState<T>(initialState);

  const getValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return event.target.value;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((pre) => ({
      ...pre,
      [event.target.name]: getValue(event),
    }));

  return [state, getValue, handleChange];
};

export default useForm;
