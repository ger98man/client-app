import React, { useState, useEffect } from "react";
import { useAuthHeader } from "react-auth-kit";
import axios from "axios";
import "./UserList.css";

export default function UserList() {
  const [data, setData] = useState([]);
  const authHeader = useAuthHeader();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users", {
        headers: { Authorization: authHeader() },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addCoins = () => {
    alert("Add coins pressed");
  };
  const substractCoins = () => {
    alert("Substract coins pressed");
  };

  return (
    <div className="table-container">
      <h1>Admin view - User table</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <button className="action-button" onClick={addCoins}>
                  Add
                </button>
                <button className="action-button" onClick={substractCoins}>
                  Substract
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
