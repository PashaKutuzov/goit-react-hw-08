import styles from "./UserMenu.module.css";
import {useDispatch, useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { fetchLogOutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";


export default function UserMenu() {
    // const userIsLogIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const handleLogOut = () => dispatch(fetchLogOutUser());
    const { name } = useSelector(selectUser);
    return (
        <div className={styles.wrapper}>
        <p className={styles.text}>Hi, {name ?? "User"}!</p>
        <button
          className={styles.link}
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    )

}

