const createStore = <S, A>(
  currentReducer: (state: S, action: A) => S,
  currentState: S
) => {
  let currentListeners: (() => void)[] = [];
  const getState = () => currentState;
  const dispatch = (action: A) => {
    currentState = currentReducer(currentState, action);
    currentListeners.forEach((listener) => listener());
    return action;
  };
  const subscribe = (listener: () => void) => {
    currentListeners.push(listener);
    return () => currentListeners.splice(currentListeners.indexOf(listener), 1);
  };
  return { getState, dispatch, subscribe };
};
export default createStore;
