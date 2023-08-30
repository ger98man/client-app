import React from "react";
import { useAuthUser } from "react-auth-kit";

export default function UserInfo() {
  const user = useAuthUser();

  return (
    <div className="user-info p-4 bg-light rounded shadow">
      <h1 className="mb-4">User Information</h1>
      <table className="user-table table table-bordered">
        <tbody>
          <tr>
            <td className="field-name">First Name</td>
            <td className="user-value">{user().firstName}</td>
          </tr>
          <tr>
            <td className="field-name">Last Name</td>
            <td className="user-value">{user().lastName}</td>
          </tr>
          <tr>
            <td className="field-name">Email</td>
            <td className="user-value">{user().email}</td>
          </tr>
          <tr>
            <td className="field-name">Total Coins</td>
            <td className="user-value">TOTAL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
