import reducer from "./user.reducer";

const selectState = (state) => state[reducer.name];

export const selectUsers = (state) => selectState(state).users;
export const selectSelectedUserId = (state) =>
  selectState(state).selectedUserId;
