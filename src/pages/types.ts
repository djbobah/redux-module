import {
  FILTER_BY_CURRENT_GROUP_ID_ACTION,
  GET_CONTACT_NAME_ACTION,
  GET_GROUP_CONTACT_ACTION,
  LOAD_CONTACTS_ACTION_FAILURE,
  LOAD_CONTACTS_ACTION_REQUEST,
  LOAD_CONTACTS_ACTION_SUCCESS,
  LOAD_GROUP_CONTACT,
  SET_CURRENT_GROUP_ID_ACTION,
  SET_FAVORITES_CONTACTS_ACTION,
  UNSET_CURRENT_GROUP_ID_ACTION,
} from "src/redux/actions";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export interface LoadContactsActionRequest {
  type: typeof LOAD_CONTACTS_ACTION_REQUEST;
}
export interface LoadContactsActionSuccess {
  type: typeof LOAD_CONTACTS_ACTION_SUCCESS;
  payload: {
    contacts: ContactDto[];
  };
}
export interface LoadContactsActionFailure {
  type: typeof LOAD_CONTACTS_ACTION_FAILURE;
  payload: {
    error: string;
  };
}
export interface SetFavoritesContactsAction {
  type: typeof SET_FAVORITES_CONTACTS_ACTION;
}

export interface SetCurrentGroupIdAction {
  type: typeof SET_CURRENT_GROUP_ID_ACTION;
  payload: GroupContactsDto;
}
export interface UnSetCurrentGroupIdAction {
  type: typeof UNSET_CURRENT_GROUP_ID_ACTION;
}
export interface FilterByCurrentGroupIdAction {
  type: typeof FILTER_BY_CURRENT_GROUP_ID_ACTION;
}

export interface GetContactNameAction {
  type: typeof GET_CONTACT_NAME_ACTION;
  payload: {
    name: ContactDto["name"];
  };
}

export interface LoadGroupContactsAction {
  type: typeof LOAD_GROUP_CONTACT;
  payload: {
    groups: GroupContactsDto[];
  };
}

export interface GetGroupContactAction {
  type: typeof GET_GROUP_CONTACT_ACTION;
  payload: {
    id: GroupContactsDto["id"];
  };
}
