const redux = require("redux");
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//takes the reducer function as input
const store = redux.createStore(counterReducer);

//triggered whenever state is changed and we can get the latest state
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//takes the method that should be executed whenever the data in the store changes i.e any action is dispatched
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
