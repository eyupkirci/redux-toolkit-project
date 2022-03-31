import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLanguage } from "../../stores/WebsiteState";
import { logout } from "../../stores/AuthState";

const Footer = () => {
  const { dark, language } = useSelector((state) => state.website);
  const { user } = useSelector((state) => state.auth);
  const languages = ["tr", "en"];
  const dispatch = useDispatch();

  return (
    <div>
      footer
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => dispatch(setLanguage(lang))}
            className={lang === language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch(setDarkMode())}>
        Switch to {dark ? "Light Mode" : "Dark Mode"}
      </button>
      {user && <button onClick={() => dispatch(logout())}>Sign Out</button>}
    </div>
  );
};

export default Footer;
