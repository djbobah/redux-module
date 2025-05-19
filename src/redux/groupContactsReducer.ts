import { ProjectActions } from "./actions";
import { LOAD_GROUP_CONTACT } from "./constants";
import { GroupsState } from "./types";

const initialState: GroupsState = {
  all: [],
  currentGroupId: "",
};

export const groupContactsReducer = (
  state = initialState,
  action: ProjectActions
) => {
  switch (action.type) {
    case LOAD_GROUP_CONTACT:
      return {
        ...state,
        all: action.payload.groups,
      };
    default:
      return state;
  }
};
