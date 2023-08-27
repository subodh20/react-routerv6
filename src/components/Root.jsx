import { NavLink, Outlet } from "react-router-dom";
import classes from "./Root.module.scss";
const Root = () => {
  return (
    <>
      <nav className={classes.Nav}>
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Root;
