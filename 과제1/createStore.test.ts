import { describe, expect, jest, test } from "@jest/globals";
import createStore from "./createStore";

describe("createStore 테스트", () => {
  interface stateType {
    counter: number;
  }

  interface IncreaseAction {
    type: "increase";
  }
  interface DecreaseAction {
    type: "decrease";
  }
  interface setCountAction {
    type: "setCount";
    payload: number;
  }

  type CountAction = IncreaseAction | DecreaseAction | setCountAction;

  const reducer = (state: stateType, action: CountAction) => {
    action;
    switch (action.type) {
      case "increase": {
        return { counter: state.counter + 1 };
      }
      case "decrease": {
        return { counter: state.counter - 1 };
      }
      case "setCount": {
        return { counter: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  test("store: state값 가져오기", () => {
    const store = createStore(reducer, { counter: 0 });
    expect(store.getState()).toEqual({ counter: 0 });
  });

  test("dispatch: 단일값 증가 감소하기", () => {
    const store = createStore(reducer, { counter: 0 });
    store.dispatch({ type: "increase" });
    expect(store.getState()).toEqual({ counter: 1 });
    store.dispatch({ type: "decrease" });
    expect(store.getState()).toEqual({ counter: 0 });
    store.dispatch({ type: "decrease" });
    store.dispatch({ type: "decrease" });
    expect(store.getState()).toEqual({ counter: -2 });
  });

  test("dispatch: payload값 설정", () => {
    const store = createStore(reducer, { counter: 0 });
    store.dispatch({ type: "setCount", payload: 5 });
    expect(store.getState()).toEqual({ counter: 5 });
    store.dispatch({ type: "setCount", payload: 15 });
    expect(store.getState()).toEqual({ counter: 15 });
  });

  test("subscribe: listener 구독 하기", () => {
    const store = createStore(reducer, { counter: 0 });
    const listener = jest.fn();
    store.subscribe(listener);
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    expect(listener.mock.calls.length).toBe(3);
  });

  test("subscribe: listener 다중 구독 하기", () => {
    const store = createStore(reducer, { counter: 0 });
    const listenerA = jest.fn();
    const listenerB = jest.fn();
    store.subscribe(listenerA);
    store.subscribe(listenerB);
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    expect(listenerA.mock.calls.length).toBe(3);
    expect(listenerB.mock.calls.length).toBe(3);
  });

  test("subscribe: listener 구독 취소 하기", () => {
    const store = createStore(reducer, { counter: 0 });
    const listener = jest.fn();
    const unSubscribeListener = store.subscribe(listener);
    unSubscribeListener();
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    expect(listener.mock.calls.length).toBe(0);
  });

  test("subscribe: listener 다중 구독 취소 하기", () => {
    const store = createStore(reducer, { counter: 0 });
    const listenerA = jest.fn();
    const listenerB = jest.fn();
    const unSubscribeListenerA = store.subscribe(listenerA);
    const unSubscribeListenerB = store.subscribe(listenerB);
    unSubscribeListenerA();
    unSubscribeListenerB();
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    store.dispatch({ type: "setCount", payload: 5 });
    expect(listenerA.mock.calls.length).toBe(0);
    expect(listenerB.mock.calls.length).toBe(0);
  });
});
