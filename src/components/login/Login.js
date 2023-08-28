import React from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function Login() {
  const signIn = useSignIn();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", formData)
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              token: res.data.token,
              expiresIn: res.data.expiresIn,
              tokenType: "Bearer",
              authState: res.data.authUserState,
              refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
              refreshTokenExpireIn: res.data.refreshTokenExpireIn, // Only if you are using refreshToken feature
            })
          ) {
            // Only if you are using refreshToken feature
            // Redirect or do-something
          } else {
            //Throw error
            console.log(e);
          }
        }
      })
      .catch((e) => {
        console.log("Server response:", e.response.data.message);
      });
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        id="form1"
        type="email"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
      />

      <MDBBtn className="mb-4" onClick={onSubmit}>
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <a href="/registration">Register</a>
        </p>
      </div>
    </MDBContainer>
  );
}
