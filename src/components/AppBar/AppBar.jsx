import { Navigate, NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";
import {useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors";
// import { fetchLogOutUser } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
 
  const userIsLogIn = useSelector(selectIsLoggedIn);
 

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <div><Navigation /></div>

        {userIsLogIn ? (
       
          <div className={styles.wrapper}>
            <UserMenu/>
          </div>
        ) : (
          <div><AuthNav/></div>
        )}
        
      </nav>
    </header>
  );
}
