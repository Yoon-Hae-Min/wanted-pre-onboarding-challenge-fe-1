import { useQuery } from 'react-query';
import { getTodo } from '../../../api/main';

const useTodoQuery = (id: string | undefined) =>
  useQuery(['todo', id], getTodo, {
    enabled: !!id,
  });

export default useTodoQuery;
