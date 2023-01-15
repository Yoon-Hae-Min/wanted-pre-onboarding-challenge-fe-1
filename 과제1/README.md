# 과제1

# 실행 방법

```bash
yarn install

yarn test
```

# 설명

![Untitled](https://user-images.githubusercontent.com/49224104/212521184-9670cf5c-ac04-4105-bb88-72d955cf85aa.png)

createStore의 최소 구현체를 직접 작성하는것 구현하기전 createStore이 어떤 함수인지를 아는 것이 먼저이다.

store을 알기위해서는 redux의 데이터 흐름부터 봐야한다 기본적인 개념은 데이터를 단방향으로만 사용한다는 것이다.

![reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26](https://user-images.githubusercontent.com/49224104/212521182-21b3ba2f-88a8-4f71-b4b0-c8635709e56c.gif)[https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

1. event발생
2. disaptch에서 발생한 event를 action형태로 store에 넘겨줌
3. store에서는 reducer의 switch case문을 확인해 해당 action을 실행해 state를 변경
4. action후 바뀐 state를 UI에 업데이트



## createStore 사용방법

```tsx
import { createStore } from 'redux'

function counter(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter, 42)

console.log(store.getState()) // 42

```

createStore는 counter라는 reducer와 초기 state값을 인자로 넘겨주면 store를 반환해 준다.

반환 받은 store에서는 `getState()`, `dispatch()`, `subscribe()` 메서드를 사용할수 있다.

인자로 reducer만 넘겨주어도 되지만 그럴경우 state를 초기화 시킨 상태로 인자로 넘겨주어야 한다

```tsx
import { createStore } from 'redux'

function counter(state = 42, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

console.log(store.getState()) // 42
```



## createStore 생성

reducer와 초기 값을 받으니 파라미터를 두개 생성한다.

```tsx
const createStore = (
  currentReducer
  currentState
) =>{}
```

리듀서의 경우 함수를 파라미터로 받으니 타입으로 함수를 지정해준다.

```tsx
const createStore = (
  currentReducer: (state, action) => void,
  currentState
) =>{}
```

counter의 리듀서의 타입을 살펴보면 state와 action을 받고 변경된 state를 리턴하는것을 할수 있다

```tsx
function counter(state = 42, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

reducer는 제너릭 S를 받아서 같은 타입인 S를 반환해야하고 초기값으로 받아야하는 state도 같은 S타입을 가져야 한다.

```tsx
const createStore = <S, A>(
  currentReducer: (state: S, action: A) => S,
  currentState: S
) => {}
```



## getState()

- 원본코드

```tsx
function getState(): S {
    if (isDispatching) {
      throw new Error(
        'You may not call store.getState() while the reducer is executing. ' +
          'The reducer has already received the state as an argument. ' +
          'Pass it down from the top reducer instead of reading it from the store.'
      )
    }

    return currentState as S
  }
```

간단하게 현재 state를 리턴해주는 함수라는걸 알수 있다.

- 최소 구현체 코드

```tsx
 const getState = () => currentState;
```



## Dispatch()

- 원본코드

```tsx
function dispatch(action: A) {
    if (!isPlainObject(action)) {
      throw new Error(
        `Actions must be plain objects. Instead, the actual type was: '${kindOf(
          action
        )}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`
      )
    }

    if (typeof action.type === 'undefined') {
      throw new Error(
        'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.'
      )
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }

    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }
```

에러처리 부분만 때고 보자

```tsx
...
let currentReducer = reducer
let currentState = preloadedState as S
let currentListeners: (() => void)[] | null = []
let nextListeners = currentListeners
let isDispatching = false

function dispatch(action: A) {
    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }

...
```

store가 가지고 있는 `currentState` 와 `currentReducer`함수에 dispatch인자로 받은 `action`을 넣어서 state값을 return받는다. 그리고 state가 변화 하였으니 listeners에 있는 구독된 함수들을 실행한다.

- 최소 구현체 코드

```tsx
const dispatch = (action: A) => {
    currentState = currentReducer(currentState, action);
    currentListeners.forEach((listener) => listener());
    return action;
  };
```



## subscribe()

- 원본코드

```tsx
function subscribe(listener: () => void) {
    let isSubscribed = true

    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    return function unsubscribe() {
      isSubscribed = false

      ensureCanMutateNextListeners()
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
      currentListeners = null
    }
  }
```

에러 부분만 때고 본다면 다음과 같다. `nextListeners` 배열에 에 인자로 받은 listener를 넣어준다. 그리고 `nextListeners` 에서 인자로 받은 listener를 삭제시키는 함수를 반환해 준다

- 최소 구현체 코드

```tsx
const subscribe = (listener: () => void) => {
    currentListeners.push(listener);
    return () => currentListeners.splice(currentListeners.indexOf(listener), 1);
  };
```



## 완성본 코드

```tsx
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
```



## 알수 있는 점

- 클로저 사용

  코드를 살펴보면 인자로 받는 값 `currentReducer`, `currentState`과 `currentListeners` 변수가 있다 createStore의 return값의 3가지 매서드 즉 내부함수들은 외부함수(createStore)에 있는 변수를 참조하고 있으므로 createStore실행이 끝나도 이 변수들은 남아있어 참조될수 있는 것이다.

  

- 옵저버 패턴 사용

  간단하게 감시자 라고 생각하면된다 어떤 특정한 상태 변화가 있을때마다 옵저버 리스트에 있는 항목들에게 나 변화했어요 라고 알리는 것이다.

  `subscribe` 매서드를 사용해서 특정 함수를 `currentListeners` 변수에 등록해놓으면 state가 변경될때 마다 이 변수에 있는 함수들을 실행하는 것이다.