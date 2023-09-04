import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { REGISTRATION_ROUTE, USER_INFO_ROUTE } from "../../utils/constants";
import "../user-list/UserList.css";

export default function Login() {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/login", formData)
      .then((res) => {
        if (res.status === 201) {
          const decodedToken = jwt_decode(res.data.token);

          signIn({
            token: res.data.token,
            expiresIn: 5,
            tokenType: "Bearer",
            authState: {
              id: decodedToken.id,
              email: decodedToken.email,
              firstName: decodedToken.firstName,
              lastName: decodedToken.lastName,
            },
          });
          navigate(USER_INFO_ROUTE);
        }
      })
      .catch((e) => {
        const errMsg = e.response?.data.message || e?.message;
        alert(errMsg);
      });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-25 text-center">
      <h2 className="fw-bold mb-5">Login</h2>

      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        id="form1"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <button className="action-button" onClick={onSubmitLogin}>
        Sign in
      </button>

      <div className="text-center">
        <p>
          Not a member? <a href={REGISTRATION_ROUTE}>Register</a>
        </p>
      </div>
    </MDBContainer>
  );
}
