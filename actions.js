document.getElementById("add").addEventListener("click", () => {
  store.dispatch({
    type: "ADD",
    payload: {
      number: 1,
    },
  });
});
