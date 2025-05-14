import { useEffect } from "react";
import "./MainApp.scss";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "src/components/Layout";
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from "src/pages";

import { useAppDispatch } from "src/redux/hooks";
import axios from "axios";
import {
  loadContactsActionFailure,
  loadContactsActionRequest,
  loadContactsActionSuccess,
  loadGroupContactsAction,
  setFavoritesContactsAction,
} from "src/redux/actions";

export const MainApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadContactsActionRequest());
    axios
      .get("http://localhost:3001/contacts")
      .then((response) => {
        dispatch(loadContactsActionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loadContactsActionFailure(error.message));
      })
      .finally(() => {
        dispatch(setFavoritesContactsAction());
      });

    axios
      .get("http://localhost:3001/groups")
      .then((response) => {
        dispatch(loadGroupContactsAction(response.data));
      })
      .catch((error) => {
        dispatch(loadContactsActionFailure(error.message));
      });
  }, []);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path="contact">
              <Route index element={<ContactListPage />} />
              <Route path=":contactId" element={<ContactPage />} />
            </Route>
            <Route path="groups">
              <Route index element={<GroupListPage />} />
              <Route path=":groupId" element={<GroupPage />} />
            </Route>
            <Route path="favorit" element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
