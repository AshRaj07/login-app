import React from "react";
import { useNavigate } from "react-router";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alert("Logged Out Successfully");
    localStorage.removeItem("session_time");
    localStorage.removeItem("token");
    localStorage.removeItem("form-values");
    localStorage.removeItem("time");
    navigate("/");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-danger btn-lg"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default LogoutBtn;
