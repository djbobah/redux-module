import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsReducer";
import { groupContactsReducer } from "./groupContactsReducer";

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    groups: groupContactsReducer,
  })
);

export type RootState = ReturnType<typeof store.getState>;
