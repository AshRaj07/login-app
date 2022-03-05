import React, { useState } from "react";
import InfoContext from "./infoContext";

const InfoState = (props) => {
  const host = "https://loginapp-backend.herokuapp.com";
  const [info, setinfo] = useState([]);

  const getInfo = async () => {
    const response = await fetch(`${host}/api/userInfoRoute/fetchInfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("authtoken"),
      },
    });

    const json = await response.json();
    // console.log(json);
    setinfo(json);
  };

  const addInfo = async (username, number, email, address) => {
    // console.log(localStorage.getItem("authtoken"));

    const response = await fetch(`${host}/api/userInfoRoute/addInfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ username, number, email, address }),
    });

    const res = await response.json();
    if (res.success) {
      setinfo(info.concat(res.saveInfo));
      alert("User added Successfully");
    } else {
      res.errors.map((er) => {
        return alert(er.msg);
      });
    }
  };

  return (
    <InfoContext.Provider value={{ info, addInfo, getInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoState;
