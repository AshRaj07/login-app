import React, { useContext, useState, useEffect } from "react";
import "./Tab1.css";
import infoContext from "../../context/infoContext";

const Tab_1 = () => {
  const context = useContext(infoContext);
  const { addInfo } = context;
  const [userInfo, setuserInfo] = useState({
    username: "",
    number: "",
    email: "",
    address: "",
  });
  const onChange = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addInfo(
      userInfo.username,
      userInfo.number,
      userInfo.email,
      userInfo.address
    );
    setuserInfo({
      username: "",
      number: "",
      email: "",
      address: "",
    });
  };

  useEffect(() => {
    const val = window.localStorage.getItem("form-values");
    setuserInfo(JSON.parse(val));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("form-values", JSON.stringify(userInfo));
  });

  return (
    <div className="user_info">
      <h1 className="display-4">User Info</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputUser" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="exampleInputUser"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={userInfo.username}
            required
          />
          <label htmlFor="exampleInputNumber" className="form-label">
            Number
          </label>
          <input
            name="number"
            type="tel"
            className="form-control"
            id="exampleInputNumber"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={userInfo.number}
            required
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={onChange}
            value={userInfo.email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Address
          </label>
          <textarea
            name="address"
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={onChange}
            value={userInfo.address}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default Tab_1;
