import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLanguage } from "../../stores/WebsiteState";

const Footer = () => {
    const { dark, language } = useSelector(state => state.website)
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
                        key={index}>
                        {lang}
                    </button>
                ))}
            </div>
            <button onClick={()=>dispatch(setDarkMode())}>Switch to {dark?'Light Mode':'Dark Mode'}</button>
        </div>
    );
};

export default Footer;
