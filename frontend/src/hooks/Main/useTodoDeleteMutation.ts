import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo } from '../../api/main';
import { TodosSuccess } from '../../types/main';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

const useTodoDeleteMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(deleteTodo, {
    onMutate: async (targetId) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData<AxiosResponse<TodosSuccess>>(['todos']);
      if (previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosSuccess>>(['todos'], {
          ...previousTodos,
          data: {
            data: [...previousTodos.data.data.filter((todo) => todo.id !== targetId)],
          },
        });
      }
      console.log(queryClient);
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<AxiosResponse<TodosSuccess>>(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onSuccess: () => {
      navigate('/');
    },
  });
};

export default useTodoDeleteMutation;
