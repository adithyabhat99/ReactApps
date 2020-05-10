import store from "./store";
import { bugAdded, bugResolved, bugRemoved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});
store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
unsubscribe();
