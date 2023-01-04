import { useMutation } from 'react-query';
import { postSignIn } from '../../api/signIn';
import { useNavigate } from 'react-router-dom';
import { SignInError, SignInForm, SignInSuccess } from '../../types/signIn';
import { AxiosError } from 'axios';

const useSignInMutation = (setError) =>
  useMutation<SignInSuccess, AxiosError<SignInError>, SignInForm>(postSignIn, {
    onSuccess: (data) => {
      const navigate = useNavigate();
      console.log('로컬스토리지에 토큰 저장', data);
      navigate('/');
    },
    onError: () => {
      setError('signIn', true);
    },
  });

export default useSignInMutation;
