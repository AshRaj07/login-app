import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

const Login = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    navigate("/home");
    const response = await fetch(
      `https://loginapp-backend.herokuapp.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      // alert("Logged in successfully")
      navigate("/home");
      window.localStorage.setItem(
        "time",
        JSON.stringify({ minutes: 5, seconds: 0 })
      );
      localStorage.setItem("session_time", 5 * 60 * 1000);
      setTimeout(() => {
        alert("Session Expired !");
        localStorage.removeItem("token");
        localStorage.removeItem("form-values");
        localStorage.removeItem("time");
        localStorage.removeItem("session_time");
        navigate("/");
      }, localStorage.getItem("session_time"));
    } else {
      alert("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login_form">
      <h1 className="display-1">Login App</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
            required
            value={credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
            required
            value={credentials.password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
