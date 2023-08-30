import React, { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import { LOGIN_ROUTE, USER_INFO_ROUTE } from "../../utils/constants";

export default function Registration() {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const onSubmitRegistration = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/registration", formData)
      .then((res) => {
        if (res.status === 201) {
          console.log("User created!");
          signIn({
            token: res.data.token,
            expiresIn: 5,
            tokenType: "Bearer",
            authState: { email: formData.email },
          });
          navigate(USER_INFO_ROUTE);
        }
      })
      .catch((e) => {
        const errMsg = e.response?.data.message || e?.message;
        console.log("Server response:", errMsg);
      });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 text-center">
      <h2 className="fw-bold mb-5">Registration</h2>

      <MDBRow>
        <MDBCol col="6">
          <MDBInput
            wrapperClass="mb-4"
            label="First name"
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </MDBCol>

        <MDBCol col="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Last name"
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </MDBCol>
      </MDBRow>

      <MDBInput
        wrapperClass="mb-4"
        label="Email"
        id="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <MDBBtn className="w-100 mb-4" size="md" onClick={onSubmitRegistration}>
        Register
      </MDBBtn>

      <div className="text-center">
        <p>
          Already a member? <a href={LOGIN_ROUTE}>Login</a>
        </p>
      </div>
    </MDBContainer>
  );
}
