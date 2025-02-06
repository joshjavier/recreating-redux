import { State } from "./declarations";
import { reducer } from "./reducer";
import { createStore } from "./store";

const initialState: State = {
  number: 1337,
};
const store = createStore(reducer, initialState);

const numberNode = document.getElementById("number");
store.subscribe(() => {
  const state = store.getState();
  const number = state.number;
  numberNode!.innerHTML = number.toString();
});

document.getElementById("add")?.addEventListener("click", () => {
  store.dispatch({
    type: "ADD",
    payload: {
      number: 1,
    },
  });
});

document.getElementById("subtract")?.addEventListener("click", () => {
  store.dispatch({
    type: "SUBTRACT",
    payload: {
      number: 1,
    },
  });
});

store.dispatch();
