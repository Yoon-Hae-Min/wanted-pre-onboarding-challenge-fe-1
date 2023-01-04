import { useMutation } from 'react-query';
import { postSignUp } from '../../api/signUp';
import { useNavigate } from 'react-router-dom';
import { SignUpError, SignUpForm, SignUpSuccess } from '../../types/signUp';
import { AxiosError, AxiosResponse } from 'axios';
import { LOCAL_ERROR } from '../../constants/error';
import { setLocalStorage } from '../../utils/localStorage';

const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation<AxiosResponse<SignUpSuccess>, AxiosError<SignUpError>, SignUpForm>(postSignUp, {
    onSuccess: ({ data }) => {
      setLocalStorage('token', data.token);
      navigate('/');
    },
    onError: () => {
      alert(LOCAL_ERROR.SIGN_UP);
    },
  });
};

export default useSignUpMutation;
