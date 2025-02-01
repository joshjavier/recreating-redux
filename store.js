const createStore = (reducer, initialState) => {
  const store = {
    state: initialState,
    listeners: [],
    getState: () => store.state,
    subscribe: (listener) => {
      store.listeners.push(listener);
    },
    dispatch: (action) => {
      store.state = reducer(store.state, action);
      store.listeners.forEach((listener) => listener());
    },
  };

  return store;
};
