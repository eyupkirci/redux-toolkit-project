import React from 'react'
import { useSelector } from "react-redux";

const Profile = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return <div style={myStyle}> Welcome {user.name}</div>;
  }
  return <div> Profile Page</div>;
};

export default Profile
