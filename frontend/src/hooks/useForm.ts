import { ChangeEvent, useState } from 'react';

const useForm = <T extends object = object>(
  initialState: T
): [T, (event: ChangeEvent<HTMLInputElement>) => void, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [state, setState] = useState<T>(initialState);

  const getValue = (event: ChangeEvent<HTMLInputElement>) => {
    return event.target.value;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setState((pre) => ({
      ...pre,
      [event.target.name]: getValue(event),
    }));

  return [state, getValue, handleChange];
};

export default useForm;
