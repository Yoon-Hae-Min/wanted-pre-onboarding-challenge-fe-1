import { useQuery } from 'react-query';
import { getTodos } from '../../../api/main';

const useTodosQuery = () => useQuery(['todos'], getTodos);

export default useTodosQuery;
