import { State } from "./declarations";
import { Action, Reducer } from "./reducer";

type Listener = () => void;

interface Store {
  state: State;
  listeners: Listener[];
  getState: () => State;
  subscribe: (listener: Listener) => void;
  dispatch: (action?: Action) => void;
}

export const createStore = (reducer: Reducer, initialState: State): Store => {
  const store: Store = {
    state: initialState,
    listeners: [],
    getState: () => store.state,
    subscribe: (listener) => {
      store.listeners.push(listener);
    },
    dispatch: (action = {}) => {
      store.state = reducer(store.state, action);
      store.listeners.forEach((listener) => listener());
    },
  };

  return store;
};
