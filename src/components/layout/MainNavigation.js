import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetups">New Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">favorite Meetups</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
