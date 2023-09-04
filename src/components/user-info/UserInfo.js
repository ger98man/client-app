import React from "react";
import { useAuthUser } from "react-auth-kit";
import "./UserInfo.css";

export default function UserInfo() {
  const user = useAuthUser();

  return (
    <div className="table-container">
      <h1>User Information</h1>
      <table className="data-table vertical">
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{user().firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user().lastName}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user().email}</td>
          </tr>
          <tr>
            <th>Total Coins</th>
            <td>TOTAL</td>
          </tr>
        </tbody>
      </table>
      <h1>Transactions</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>field1</th>
            <th>field2</th>
            <th>field3</th>
            <th>field4</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
