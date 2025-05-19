import {
  FilterByCurrentGroupIdAction,
  GetContactNameAction,
  GetGroupContactAction,
  LoadContactsActionFailure,
  LoadContactsActionRequest,
  LoadContactsActionSuccess,
  LoadGroupContactsAction,
  SetCurrentGroupIdAction,
  SetFavoritesContactsAction,
  UnSetCurrentGroupIdAction,
} from "src/redux/types";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
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
} from "./constants";

export const loadContactsActionRequest = (): LoadContactsActionRequest => {
  return { type: LOAD_CONTACTS_ACTION_REQUEST };
};
export const loadContactsActionSuccess = (
  contacts: ContactDto[]
): LoadContactsActionSuccess => {
  return { type: LOAD_CONTACTS_ACTION_SUCCESS, payload: { contacts } };
};
export const loadContactsActionFailure = (
  error: string
): LoadContactsActionFailure => {
  return { type: LOAD_CONTACTS_ACTION_FAILURE, payload: { error } };
};

export const setFavoritesContactsAction = (): SetFavoritesContactsAction => {
  return { type: SET_FAVORITES_CONTACTS_ACTION };
};

export const setCurrentGroupIdAction = (
  id: GroupContactsDto
): SetCurrentGroupIdAction => {
  return { type: SET_CURRENT_GROUP_ID_ACTION, payload: id };
};
export const unsetCurrentGroupIdAction = (): UnSetCurrentGroupIdAction => {
  return { type: UNSET_CURRENT_GROUP_ID_ACTION };
};

export const filterByCurrentGroupIdAction =
  (): FilterByCurrentGroupIdAction => {
    return { type: FILTER_BY_CURRENT_GROUP_ID_ACTION };
  };

export const getContactNameAction = (
  name: ContactDto["name"]
): GetContactNameAction => {
  return { type: GET_CONTACT_NAME_ACTION, payload: { name } };
};

export const loadGroupContactsAction = (
  groups: GroupContactsDto[]
): LoadGroupContactsAction => {
  return { type: LOAD_GROUP_CONTACT, payload: { groups } };
};

export const getGroupContactAction = (
  id: GroupContactsDto["id"]
): GetGroupContactAction => {
  return { type: GET_GROUP_CONTACT_ACTION, payload: { id } };
};

export type ProjectActions =
  | LoadContactsActionRequest
  | LoadContactsActionSuccess
  | LoadContactsActionFailure
  | SetFavoritesContactsAction
  | SetCurrentGroupIdAction
  | UnSetCurrentGroupIdAction
  | FilterByCurrentGroupIdAction
  | GetContactNameAction
  | LoadGroupContactsAction
  | GetGroupContactAction;
