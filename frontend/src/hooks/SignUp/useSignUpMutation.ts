import { useMutation } from 'react-query';
import { postSignUp } from '../../api/signUp';
import { useNavigate } from 'react-router-dom';
import { SignUpError, SignUpForm, SignUpSuccess } from '../../types/signUp';
import { AxiosError } from 'axios';
import { LOCAL_ERROR } from '../../constants/error';

const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation<SignUpSuccess, AxiosError<SignUpError>, SignUpForm>(postSignUp, {
    onSuccess: (data) => {
      console.log('로컬스토리지에 토큰 저장', data);
      navigate('/');
    },
    onError: () => {
      alert(LOCAL_ERROR.SIGN_UP);
    },
  });
};

export default useSignUpMutation;
