import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

let RootLayout = () => {
  return (
    <>
      <NavLink className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")} style={{ marginRight: "5px" }} to="/">
        Home
      </NavLink>
      |
      <NavLink className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")} style={{ marginLeft: "5px" }} to="/About">
        About
      </NavLink>{" "}
      |
      <NavLink className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")} style={{ marginLeft: "5px" }} to="/Blog">
        Blog
      </NavLink>
      <p />
      <Outlet />
    </>
  );
};

export default RootLayout;
