import { useMutation } from 'react-query';
import { postSignUp } from '../../../api/signUp';
import { useNavigate } from 'react-router-dom';
import { LOCAL_ERROR } from '../../../constants/error';
import { setLocalStorage } from '../../../utils/localStorage';

const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation(postSignUp, {
    onSuccess: ({ data }) => {
      setLocalStorage('token', data.token);
      alert('회원가입이 완료되었습니다');
      navigate('/');
    },
    onError: () => {
      alert(LOCAL_ERROR.SIGN_UP);
    },
  });
};

export default useSignUpMutation;
