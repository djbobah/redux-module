import { LOAD_GROUP_CONTACT, ProjectActions } from "./actions";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

interface GroupsState {
  all: GroupContactsDto[];
  currentGroupId: string;
}

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
    // case GET_GROUP_CONTACT_ACTION:
    //   // return state.contactIds.includes(action.payload.id);
    //   //   return state.map((group) => {
    //   //   return group.contactIds.includes(action.payload.id);
    //   // });
    //   return state.map((group) => {
    //     return group;
    //   });
    default:
      return state;
  }
};
