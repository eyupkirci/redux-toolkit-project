import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./../stores/AuthState";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    const dummyUserData = {
      id: 1,
      name: "Someone",
      token: "qwertyuiopasdfghjklzxcvbnm",
    };
    // this provide to keep user info in localstorage.
    localStorage.setItem("auth", dummyUserData);
    dispatch(login(dummyUserData));
    history.push("/");
  };

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };

  return (
    <div style={myStyle}>
      {" "}
      Please Sign In
      <button
        onClick={() => {
          handleLogin();
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
