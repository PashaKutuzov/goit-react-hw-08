import styles from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
export default function AuthNav() {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
      <NavLink className={styles.link} to="/register">
        Sing Up
      </NavLink>
    </div>
  );
}
