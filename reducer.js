const reducer = (previousState, action) => {
  switch (action.type) {
    case "ADD":
      const nextState = {
        number: previousState.number + action.payload.number,
      };

      return nextState;
    case "SUBTRACT":
      const nextState = {
        number: previousState.number - action.payload.number,
      };

      return nextState;
    default:
      return state;
  }
};
