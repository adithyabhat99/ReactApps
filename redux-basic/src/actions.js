import * as actions from "./actionTypes";

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description,
    },
  };
}
