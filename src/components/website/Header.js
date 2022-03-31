import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { dark, language } = useSelector((state) => state.website);
  return (
    <div className="header">
      <nav>
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" exact={true} activeClassName="active">
          About
        </NavLink>
        <NavLink to="/profile" exact={true} activeClassName="active">
          Profile
        </NavLink>
      </nav>{" "}
      <div>Dark mode = {dark ? "yes" : "no"}</div>
      <div>Language = {language}</div>
    </div>
  );
};

export default Header;
