import { useSelector } from "react-redux";
import { selectAuthError, selectAuthLoading } from "../../redux/auth/selectors";
import {
  selectContactsError,
  selectContactsLoading,
} from "../../redux/contacts/selectors";
import AppBar from "../AppBar/AppBar";

import styles from "./Container.module.css";
import Loader from "../loader/Loader";

export default function Container({ children }) {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const contactsLoading = useSelector(selectContactsLoading);
  const contactsError = useSelector(selectContactsError);

  return (
    <div className={styles.container}>
      <AppBar />
      {authLoading ?? contactsLoading ? (
        <Loader />
      ) : authError ?? contactsError ? (
        <p style={{ textAlign: "center" }}>Error. Please try again!</p>
      ) : (
        children
      )}
    </div>
  );
}
