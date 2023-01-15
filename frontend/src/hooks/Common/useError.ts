import { useState } from 'react';

const useError = <T extends object>(initialState: T): [T, <P extends keyof T>(target: P, value: string) => string] => {
  const [isError, setIsError] = useState(initialState);

  const setError = <P extends keyof T>(target: P, value: string) => {
    setIsError((pre) => ({ ...pre, [target]: value }));
    return value;
  };

  return [isError, setError];
};

export default useError;
