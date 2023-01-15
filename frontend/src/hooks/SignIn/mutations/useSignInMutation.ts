import { useMutation } from 'react-query';
import { postSignIn } from '../../../api/signIn';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../../../utils/localStorage';

const useSignInMutation = (setError) => {
  const navigate = useNavigate();
  return useMutation(postSignIn, {
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
