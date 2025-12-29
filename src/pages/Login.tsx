import * as React from "react";
import { FormControl, TextField } from "@mui/material";
import "../styles/pages/login-page.css";
import GoogleIcon from "../assets/images/google.webp";

import { AuthenticationContext } from "../../src/context/AuthenticationContext";

export default function Login() {
  const { loginWithGoogle } = React.useContext(AuthenticationContext);

  return (
    <div className="login_container">
      <div className="login_form">
        <span className="form_title">Welcome to Airbnb</span>
        <form action="" style={{ width: "100%" }}>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <TextField
              label="Email address"
              id="filled-input-email"
              variant="filled"
            />
            <TextField
              label="password"
              id="filled-input-password"
              variant="filled"
            />
            <button className="submit_login_btn">Continue</button>
          </FormControl>
        </form>
      </div>

      <span>or</span>
      <div className="login_with_google_btn" onClick={loginWithGoogle}>
        <img src={GoogleIcon} alt="icon" width={20} height={20} />
        <span>Continue with Google</span>
      </div>
    </div>
  );
}
