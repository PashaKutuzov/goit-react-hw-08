import styles from "./Navigation.module.css";
import {NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
export default function Navigation() {
  const userIsLogIn = useSelector(selectIsLoggedIn);
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {userIsLogIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
}
