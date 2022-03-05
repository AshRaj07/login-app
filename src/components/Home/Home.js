import React from "react";
import "./Home.css";
import Tab1 from "../Tab_1/Tab1";
import Tab2 from "../Tab_2/Tab2";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import Timer from "../Timer/Timer";

const Home = () => {
  return (
    <>
      <Timer />
      <div className="home">
        <Tab1 />
        <Tab2 />
      </div>
      <div className="logoutbtn">
        <LogoutBtn />
      </div>
    </>
  );
};

export default Home;
