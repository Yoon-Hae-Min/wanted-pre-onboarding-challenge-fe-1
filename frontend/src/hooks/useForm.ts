import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

const useForm = <T extends object = object>(
  initialState: T
): [
  T,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>
] => {
  const [state, setState] = useState<T>(initialState);

  const getValue = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return event.target.value;
  }, []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setState((pre) => ({
        ...pre,
        [event.target.name]: getValue(event),
      })),
    []
  );

  return [state, getValue, handleChange, setState];
};

export default useForm;
