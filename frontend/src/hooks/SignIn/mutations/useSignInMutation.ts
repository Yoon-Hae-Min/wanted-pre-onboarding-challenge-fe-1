import { useMutation } from 'react-query';
import { postSignIn } from '../../../api/signIn';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../../utils/localStorage';
import { SignInError, SignInForm, SignInSuccess } from '../../../types/signIn';
import { AxiosError, AxiosResponse } from 'axios';

const useSignInMutation = (setError) => {
  const navigate = useNavigate();
  return useMutation<AxiosResponse<SignInSuccess>, AxiosError<SignInError>, SignInForm>(postSignIn, {
    onSuccess: ({ data }) => {
      setLocalStorage('token', data.token);
      navigate('/');
    },
    onError: () => {
      setError('signIn', true);
    },
  });
};

export default useSignInMutation;
