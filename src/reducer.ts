import { State } from "./declarations";

export type Action = {
  type?: string;
  payload?: any;
};

export type Reducer = (previousState: State, action: Action) => State;

export const reducer: Reducer = (previousState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        number: previousState.number + action.payload.number,
      };
    case "SUBTRACT":
      return {
        number: previousState.number - action.payload.number,
      };
    default:
      return previousState;
  }
};
