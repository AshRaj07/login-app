import "./Tab2.css";
import infoContext from "../../context/infoContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";

const Tab2 = () => {
  const navigate = useNavigate();
  const user = useContext(infoContext);
  const { info, getInfo } = user;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getInfo();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="user_table">
      <h1>User Data</h1>
      <table className="table table-light table-borderless">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {info.map((info, index) => {
            return (
              <tr key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{info.username}</td>
                <td>{info.number}</td>
                <td>{info.email}</td>
                <td>{info.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tab2;
