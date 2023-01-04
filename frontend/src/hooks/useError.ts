import { useState } from 'react';

const useError = <T extends object>(initialState: T): [T, <P extends keyof T>(target: P, bool: boolean) => boolean] => {
  const [isError, setIsError] = useState(initialState);

  const setError = <P extends keyof T>(target: P, bool: boolean) => {
    setIsError((pre) => ({ ...pre, [target]: bool }));
    return bool;
  };

  return [isError, setError];
};

export default useError;
